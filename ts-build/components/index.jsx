import Git, { BranchStatus } from '../actions/git/Git';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import SidebarView from './SidebarView';
import LogView from './LogView';
import { assign } from 'lodash';
import CommitView from './CommitView';
import TabBox from './TabBox';
let commitViewOptionsReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_COMMIT_VIEW_DATA':
            return assign({}, state, action.data);
    }
    return {
        commit: '',
        diff: null,
        diffContext: 3,
        ignoreWhitespace: false
    };
};
let baseDataReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_BASEDATA':
            return assign({}, state, action.data);
    }
    return {
        dirName: '',
        hostname: '',
        viewOnly: true,
        activeCommit: null
    };
};
let branchDataReducer = (key) => {
    return (state, action) => {
        switch (action.type) {
            case 'SET_' + key + '_BRANCHES':
                return action.data;
            default:
                return state || [];
        }
    };
};
let commitsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COMMITS':
            return action.commits;
        default:
            return state || [];
    }
};
let reducer = combineReducers({
    baseData: baseDataReducer,
    commitViewOptions: commitViewOptionsReducer,
    localBranches: branchDataReducer("LOCAL"),
    remoteBrances: branchDataReducer('REMOTE'),
    tags: branchDataReducer('TAGS'),
    commits: commitsReducer
});
let store = createStore(reducer, applyMiddleware(thunkMiddleware));
class Index extends React.Component {
    constructor() {
        super(...arguments);
        this.commitClicked = (commit) => {
            const { diffContext, ignoreWhitespace, gitDiffOpts, gitFile } = this.props.commitViewOptions;
            this.props.onCommitClicked(commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile);
        };
    }
    render() {
        const { localBranches, remoteBrances, tags, commits, commitViewOptions: { diff, ignoreWhitespace, diffContext, gitDiffOpts, gitFile } } = this.props;
        const { dirName, viewOnly, hostname, activeCommit } = this.props.baseData;
        return <div>
      <SidebarView dirName={dirName} viewOnly={viewOnly} hostname={hostname} localBranches={localBranches} remoteBrances={remoteBrances} tags={tags} onLocalBranchClicked={this.props.onLocalBranchClicked} onRemoteClicked={this.props.onRemoteClicked} onTagClicked={this.props.onTagClicked}/>
      <div id='main-view'>
        <div id='history-view'>
          <LogView commits={commits} onCommitClicked={this.commitClicked} active={activeCommit}/>
          <div id='commit-view' style={{ display: 'flex' }}>
            <div id='commit-view-header'>
              <TabBox buttons={[{ name: "Commit", id: 'Commit' }, { name: "Tree", id: 'Tree' }]} onClicked={e => e}/>
            </div>
            <CommitView buttons={[]} hunkSelectionAllowed={true} diff={diff} sideBySide={false} contextButtons={true} onClicked={e => e} ignoreWhitespace={ignoreWhitespace} diffContext={diffContext} gitDiffOpts={gitDiffOpts} gitFile={gitFile} updateDiffContext={(n) => this.props.setDiffContext(n)} toggleIgnoreWhieSpace={this.props.toggleIgnoreWhiteSpace}/>
          </div>
        </div>
      </div>
    </div>;
    }
}
let ConnectedIndex = connect((state) => {
    return state;
}, (dispatch) => {
    return {
        onLocalBranchClicked: (b) => {
            git.getCommits(1000, b.name)
                .then((commits) => dispatch({ type: 'SET_COMMITS', commits: commits }));
        },
        onRemoteClicked: (b) => {
            git.getCommits(1000, b.name)
                .then((commits) => dispatch({ type: 'SET_COMMITS', commits: commits }));
        },
        onTagClicked: (b) => {
            git.getCommits(1000, b.name)
                .then((commits) => dispatch({ type: 'SET_COMMITS', commits: commits }));
        },
        onCommitClicked: (commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile) => {
            dispatch({ type: 'UPDATE_BASEDATA', data: { activeCommit: commit.hash } });
            dispatch(disp => {
                return git.getDiff(commit.hash, diffContext, ignoreWhitespace, gitDiffOpts, gitFile)
                    .then(diff => disp({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { diff: diff.data } }));
            });
        },
        toggleIgnoreWhiteSpace: () => {
            dispatch({ type: 'toggleIgnoreWhiteSpace' });
        },
        setDiffContext: (context) => {
            store.dispatch({ type: 'UPDATE_BASEDATA', data: { diffContext: context } });
        }
    };
})(Index);
ReactDOM.render(<Provider store={store}>
  <ConnectedIndex baseData={{
    dirName: '',
    viewOnly: true,
    hostname: '',
    activeCommit: ''
}} localBranches={[]} remoteBrances={[]} tags={[]} onLocalBranchClicked={b => b} onRemoteClicked={b => b} onTagClicked={t => t} onCommitClicked={c => c} commits={[]} commitViewOptions={{
    commit: '',
    diff: '',
    ignoreWhitespace: false,
    diffContext: 3
}} setDiffContext={(n) => n} toggleIgnoreWhiteSpace={() => { }}/>
</Provider>, document.getElementById('global-container'));
let git = new Git();
git.getDirName()
    .then(dirName => {
    store.dispatch({
        type: 'UPDATE_BASEDATA',
        data: {
            dirName: dirName
        }
    });
    git.getViewOnly()
        .then(viewOnly => {
        store.dispatch({
            type: 'UPDATE_BASEDATA',
            data: {
                viewOnly: viewOnly === "1"
            }
        });
    });
    git.getHostName()
        .then(hostname => {
        store.dispatch({
            type: 'UPDATE_BASEDATA',
            data: {
                hostname: hostname
            }
        });
    });
    git.getLocalBranches()
        .then((branches) => {
        store.dispatch({
            type: 'SET_LOCAL_BRANCHES',
            data: branches.data
        });
        return branches;
    })
        .then(branches => {
        if (branches.data) {
            let active = branches.data.find(b => b.status === BranchStatus.Current);
            if (active) {
                git.getCommits(1000, active.name)
                    .then((commits) => store.dispatch({ type: 'SET_COMMITS', commits: commits }));
            }
        }
    });
    git.getRemoteBranches()
        .then((branches) => {
        store.dispatch({
            type: 'SET_REMOTE_BRANCHES',
            data: branches.data
        });
    });
    git.getTags()
        .then((tags) => {
        store.dispatch({
            type: 'SET_TAGS_BRANCHES',
            data: tags.data
        });
    });
});
//# sourceMappingURL=index.jsx.map