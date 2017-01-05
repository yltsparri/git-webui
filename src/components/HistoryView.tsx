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
import TabBox from './TabBox';

export interface HistoryViewDataProps {
  commitHash: string;
  diff: string;
  ignoreWhitespace: boolean;
  diffContext: number;
  gitDiffOpts?: Array<string>;
  gitFile?: string;
  commits: Array<CommitInfo>;
}

export interface HistoryViewDispatchProps {
  onCommitClicked(commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile);
  setDiffContext(n);
  toggleIgnoreWhiteSpace();
}

interface HistoryViewProps extends HistoryViewDataProps, HistoryViewDispatchProps { }
export default class HistoryView extends React.PureComponent<HistoryViewProps, undefined> {

  commitClicked = (commit) => {
    const {diffContext, ignoreWhitespace, gitDiffOpts, gitFile} = this.props;
    this.props.onCommitClicked(commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile);
  }

  render() {
    const {commits, diff, ignoreWhitespace, diffContext, gitDiffOpts, gitFile, commitHash} = this.props;

    return <div id='history-view'>
      <LogView commits={commits} onCommitClicked={this.commitClicked} active={commitHash} />
      <div id='commit-view' style={{ display: 'flex' }}>
        <div id='commit-view-header'>
          <TabBox buttons={[{ name: "Commit", id: 'Commit' }, { name: "Tree", id: 'Tree' }]} onClicked={e => e} />
        </div>
        <CommitView buttons={[]}
          hunkSelectionAllowed={true}
          diff={diff} sideBySide={false}
          contextButtons={true}
          onClicked={e => e}
          ignoreWhitespace={ignoreWhitespace}
          diffContext={diffContext}
          gitDiffOpts={gitDiffOpts}
          gitFile={gitFile} updateDiffContext={(n) => this.props.setDiffContext(n)} toggleIgnoreWhieSpace={this.props.toggleIgnoreWhiteSpace} />
      </div>
    </div>;
  }
}
