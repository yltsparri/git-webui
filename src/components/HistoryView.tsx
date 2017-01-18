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

import { CommitInfo } from '../actions/git/CommitInfo';
import React from 'react';
import LogView from './LogView';
import { CommitViewMode } from '../actions/AppState';

export interface HistoryViewDataProps {
  commitHash: string;
  diffViewMode: CommitViewMode;
  commits: Array<CommitInfo>;
  CommitView: React.ComponentClass<any>;
  ExploreView: React.ComponentClass<any>;
}

export interface HistoryViewDispatchProps {
  onCommitClicked(commit);
  selectDiffViewMode(mode: CommitViewMode);
}

interface HistoryViewProps extends HistoryViewDataProps, HistoryViewDispatchProps { }
export default class HistoryView extends React.PureComponent<HistoryViewProps, undefined> {
  render() {
    const {
      commits,
      diffViewMode,
      commitHash,
      selectDiffViewMode,
      CommitView
    } = this.props;

    return <div id='history-view'>
      <LogView commits={commits} onCommitClicked={this.props.onCommitClicked} active={commitHash} />
      <div id='commit-view' style={{ display: 'flex' }}>
        <div id='commit-view-header'>
          <ul className='nav nav-pills nav-justified' role='tablList'>
            <li onClick={() => selectDiffViewMode(CommitViewMode.Diff)} className={diffViewMode === CommitViewMode.Diff ? 'active' : ''}><a href='#'>Commit</a></li>
            <li onClick={() => selectDiffViewMode(CommitViewMode.Tree)} className={diffViewMode === CommitViewMode.Tree ? 'active' : ''}><a href='#'>Tree</a></li>
          </ul>
        </div>
        <CommitView />
      </div>
    </div>;
  }
}
