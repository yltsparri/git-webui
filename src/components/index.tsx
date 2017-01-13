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
import { commitSelected, itemSelected, initState, selectDiffViewMode, loadNode } from '../actions/ActionCreators';
import HistoryView, { HistoryViewDataProps, HistoryViewDispatchProps } from './HistoryView';
import RemoteView from './RemoteView';
import ModalMessage from './ModalMessage';
import { FileInfo } from '../actions/git/Git';

let reducer = combineReducers({
  baseData: baseDataReducer,
  historyViewOptions: historyViewOptionsReducer,
  localBranches: getBranchDataReducer("LOCAL"),
  remoteBrances: getBranchDataReducer('REMOTE'),
  tags: getBranchDataReducer('TAGS'),
  commits: commitsReducer
});
let store = createStore(reducer, applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
));

store.dispatch(initState());

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
        dispatch(itemSelected(b));
      }
    };
  })(SidebarView);

let ConnectedHistoryView = connect<HistoryViewDataProps, HistoryViewDispatchProps, any>(
  (state: AppState) => {
    return {
      commitHash: state.historyViewOptions.commitHash,
      diff: state.historyViewOptions.diff,
      ignoreWhitespace: state.historyViewOptions.ignoreWhitespace,
      diffContext: state.historyViewOptions.diffContext,
      gitDiffOpts: state.historyViewOptions.gitDiffOpts,
      gitFile: state.historyViewOptions.gitFile,
      commits: state.commits,
      diffViewMode: state.historyViewOptions.diffViewMode,
      path: state.historyViewOptions.path,
      files: state.historyViewOptions.files
    };
  },
  (dispatch) => {
    return {
      onCommitClicked: (commit) => {
        dispatch(commitSelected(commit));
      },
      toggleIgnoreWhiteSpace: () => {
        dispatch({ type: 'toggleIgnoreWhiteSpace' });
      },
      setDiffContext: (context) => {
        dispatch({ type: 'UPDATE_BASEDATA', data: { diffContext: context } });
      },
      selectDiffViewMode: (mode: DiffViewMode) => {
        dispatch(selectDiffViewMode(mode));
      },
      onNodeSelected: (node: FileInfo) => {
        dispatch(loadNode(node));
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
