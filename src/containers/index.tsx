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
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import ModalMessage from './ModalMessage';import { AppState, AppMode } from '../actions/AppState';
import Init from '../actions/actioncreators/Init';
import HistoryView from './History';
import RemoteView from '../components/RemoteView';
import store from '../actions/Store';
import Explore from './Explore';

store.dispatch(Init.initState());

interface IndexProps {
  mode: AppMode;
  repo: string;
}

class Index extends React.Component<IndexProps, undefined> {
  render() {
    return <div className='root'>
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
      case AppMode.Explore:
        return <Explore />;
      default:
        return <HistoryView />;
    }
  }
}

let ConnectedIndex = connect<IndexProps, any, any>((state: AppState) => {
  return {
    repo: state.appData.dirName,
    mode: state.appData.mode
  };
})(Index);

ReactDOM.render(<Provider store={store}>
  <ConnectedIndex />
</Provider>, document.getElementById('global-container'));
