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
import Sidebar from './Sidebar';
import ModalMessage from './ModalMessage';
import { baseDataReducer, historyViewOptionsReducer, getBranchDataReducer, commitsReducer } from '../actions/Reducers';
import { AppState, AppMode } from '../actions/AppState';
import ActionCreators from '../actions/ActionCreators';
import HistoryView from './History';
import RemoteView from '../components/RemoteView';
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





interface IndexProps {
  mode: AppMode;
  repo: string;
}

class Index extends React.Component<IndexProps, undefined> {
  render() {
    return <div>
      <Sidebar />
      <div id='main-view'>
        <ModalMessage />
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
        return <HistoryView />;
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
