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
import CommitView from './CommitView';
import { DiffViewMode } from '../actions/AppState';
import FileInfo from '../actions/git/FileInfo';

export interface HistoryViewDataProps {
  commitHash: string;
  diff: string;
  ignoreWhitespace: boolean;
  diffContext: number;
  diffViewMode: DiffViewMode;
  gitDiffOpts?: Array<string>;
  gitFile?: string;
  commits: Array<CommitInfo>;

  path: Array<FileInfo>;
  files: Array<FileInfo>;
}

export interface HistoryViewDispatchProps {
  onCommitClicked(commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile);
  setDiffContext(n);
  toggleIgnoreWhiteSpace();
  selectDiffViewMode(mode: DiffViewMode);
  onNodeSelected(node: FileInfo);
}

interface HistoryViewProps extends HistoryViewDataProps, HistoryViewDispatchProps { }
export default class HistoryView extends React.PureComponent<HistoryViewProps, undefined> {

  commitClicked = (commit) => {
    const {diffContext, ignoreWhitespace, gitDiffOpts, gitFile} = this.props;
    this.props.onCommitClicked(commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile);
  }

  render() {
    const {
      commits,
      diff,
      ignoreWhitespace,
      diffViewMode,
      diffContext,
      gitDiffOpts,
      path,
      files,
      gitFile,
      commitHash
    } = this.props;

    return <div id='history-view'>
      <LogView commits={commits} onCommitClicked={this.commitClicked} active={commitHash} />
      <div id='commit-view' style={{ display: 'flex' }}>
        <div id='commit-view-header'>
          <ul className='nav nav-pills nav-justified' role='tablList'>
            <li onClick={() => this.props.selectDiffViewMode(DiffViewMode.Diff)} className={diffViewMode === DiffViewMode.Diff ? 'active' : ''}><a href='#'>Commit</a></li>
            <li onClick={() => this.props.selectDiffViewMode(DiffViewMode.Tree)} className={diffViewMode === DiffViewMode.Tree ? 'active' : ''}><a href='#'>Tree</a></li>
          </ul>
        </div>
        <CommitView buttons={[]}
          hunkSelectionAllowed={true}
          diff={diff} sideBySide={false}
          contextButtons={true}
          onClicked={e => e}
          ignoreWhitespace={ignoreWhitespace}
          diffContext={diffContext}
          gitDiffOpts={gitDiffOpts}
          gitFile={gitFile}
          diffViewMode={diffViewMode}
          updateDiffContext={(n) => this.props.setDiffContext(n)}
          toggleIgnoreWhieSpace={this.props.toggleIgnoreWhiteSpace}
          onNodeSelected={this.props.onNodeSelected}
          path={path}
          files={files} />
      </div>
    </div>;
  }
}
