/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import SidebarView, { SidebarViewDataProps, SidebarViewDispatchProps, SelectedItem } from './SidebarView';
import { baseDataReducer, historyViewOptionsReducer, getBranchDataReducer, commitsReducer } from '../actions/Reducers';
import { AppState, AppMode, DiffViewMode } from '../actions/AppState';
import ActionCreators from '../actions/ActionCreators';
import HistoryView, { HistoryViewDataProps, HistoryViewDispatchProps } from './HistoryView';
import RemoteView from './RemoteView';
import ModalMessage from './ModalMessage';
import FileInfo from '../actions/git/FileInfo';
import Actions from '../actions/Actions';

let reducer = combineReducers({
  baseData: baseDataReducer,
  historyViewOptions: historyViewOptionsReducer,
  localBranches: getBranchDataReducer(Actions.SET_LOCAL_BRANCHES),
  remoteBrances: getBranchDataReducer(Actions.SET_REMOTE_BRANCHES),
  tags: getBranchDataReducer(Actions.SET_TAGS_BRANCHES),
  commits: commitsReducer
});
let store = createStore(reducer, applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
));

store.dispatch(ActionCreators.initState());

let ConnectedSidebarView = connect<SidebarViewDataProps, SidebarViewDispatchProps, any>(
  (state: AppState) => {
    return {
      dirName: state.baseData.dirName,
      viewOnly: state.baseData.viewOnly,
      localBranches: state.localBranches,
      remoteBrances: state.remoteBrances,
      tags: state.tags,
      selectedItem: state.baseData.selectedItem,
      mode: state.baseData.mode
    };
  }, (dispatch): SidebarViewDispatchProps => {
    return {
      onItemClicked: (b: SelectedItem) => {
        dispatch(ActionCreators.itemSelected(b));
      }
    };
  })(SidebarView);

let ConnectedHistoryView = connect<HistoryViewDataProps, HistoryViewDispatchProps, any>(
  (state: AppState) => {
    const options = state.historyViewOptions;
    return {
      commitHash: options.commitHash,
      diff: options.diff,
      ignoreWhitespace: options.ignoreWhitespace,
      diffContext: options.diffContext,
      fullFile: options.fullFileDiff,
      gitDiffOpts: options.gitDiffOpts,
      gitFile: options.gitFile,
      commits: state.commits,
      diffViewMode: options.diffViewMode,
      path: options.path,
      files: options.files,
    };
  },
  (dispatch) => {
    return {
      onCommitClicked: (commit) => {
        dispatch(ActionCreators.commitSelected(commit));
      },
      toggleIgnoreWhiteSpace: () => {
        dispatch(ActionCreators.toggleIgnoreWhiteSpace());
      },
      toggleShowFullFile: () => {
        dispatch(ActionCreators.toggleShowFullFile());
      },
      setDiffContext: (context) => {
        dispatch(ActionCreators.setDiffContext(context));
      },
      selectDiffViewMode: (mode: DiffViewMode) => {
        dispatch(ActionCreators.selectDiffViewMode(mode));
      },
      onNodeSelected: (node: FileInfo) => {
        dispatch(ActionCreators.loadNode(node));
      }
    };
  })(HistoryView);

let ConnectedModalMessage = connect<any, any, any>((state: AppState) => {
  return { message: state.baseData.messages };
},
  dispatch => {
    return {
      close: () => dispatch({ type: 'CLOSE_MESSAGE' })
    };
  })(ModalMessage);

interface IndexProps {
  mode: AppMode;
  repo: string;
}

class Index extends React.Component<IndexProps, undefined> {
  render() {
    return <div>
      <ConnectedSidebarView />
      <div id='main-view'>
        <ConnectedModalMessage />
        {
          this.getMainViewContents()
        }
      </div>
    </div>;
  }

  private getMainViewContents = () => {
    switch (this.props.mode) {
      case AppMode.RemoteAccess:
        return <RemoteView repo={this.props.repo} />;
      case AppMode.Workspace:
        return <div />;
      default:
        return <ConnectedHistoryView />;
    }
  }
}

let ConnectedIndex = connect<IndexProps, any, any>((state: AppState) => {
  return {
    repo: state.baseData.dirName,
    mode: state.baseData.mode
  };
})(Index);

ReactDOM.render(<Provider store={store}>
  <ConnectedIndex />
</Provider>, document.getElementById('global-container'));
