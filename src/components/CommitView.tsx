/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import DiffView from './DiffView';
import TreeView from './TreeView';
import { DiffViewMode } from '../actions/AppState';
import { FileInfo } from '../actions/git/Git';

interface Button {
  name: string;
  id: string;
}

interface CommitViewProps {
  buttons: Array<Button>;
  onClicked(button: Button);
  sideBySide: boolean;
  hunkSelectionAllowed: boolean;
  contextButtons: boolean;
  diff: string;
  ignoreWhitespace: boolean;
  diffContext: number;
  gitDiffOpts?: Array<string>;
  gitFile?: string;
  diffViewMode: DiffViewMode;
  path: Array<FileInfo>;
  files: Array<FileInfo>;
  toggleIgnoreWhieSpace();
  updateDiffContext(diffContext: number);
  onNodeSelected(node: FileInfo);
}

export default class CommitView extends React.PureComponent<CommitViewProps, undefined>{

  render() {

    let buttons = this.props.buttons ? this.renderButtons() : '';
    return <div className='diff-view-container panel panel-default'>
      {buttons}
      <div className='panel-body'>
        {this.props.diffViewMode === DiffViewMode.Diff ?
          <DiffView diff={this.props.diff} /> :
            <TreeView path={this.props.path}
              files={this.props.files}
              onNodeSelected={this.props.onNodeSelected} />}
      </div>
    </div>;
  }

  renderButtons = () => {
    const ignoreWhitespaceClass = 'btn btn-sm btn-default diff-ignore-whitespace' +
      (this.props.ignoreWhitespace ? ' active' : '');
    const allFile = this.props.diffContext === 99999999;
    const completeFileClass = 'btn btn-sm btn-default diff-context-all' + (allFile ? ' active' : '');

    return <div className='panel-heading btn-toolbar' role='toolbar'>
      <button type='button'
        className={ignoreWhitespaceClass}
        data-toggle='button'
        aria-pressed={this.props.ignoreWhitespace}
        onClick={this.props.toggleIgnoreWhieSpace}>
        Ignore Whitespace
      </button>
      <button type='button'
        className={completeFileClass}
        data-toggle='button'
        aria-pressed={allFile}
        onClick={() => this.props.updateDiffContext(99999999)}>
        Complete file
      </button>
      <div className='btn-group btn-group-sm'>
        <span>{'Context:\u00A0' + this.props.diffContext}</span>{'\u00A0'}
        <button type='button'
          className='btn btn-default diff-context-remove'
          onClick={() => this.props.updateDiffContext(this.props.diffContext - 1)}>
          -
        </button>
        <button type='button'
          className='btn btn-default diff-context-add'
          onClick={() => this.props.updateDiffContext(this.props.diffContext + 1)}>
          +
        </button>
      </div>
      <div className='btn-group btn-group-sm diff-selection-buttons'>
        <button type='button'
          className='btn btn-default diff-stage'
          style={{ display: 'none' }}>
          Stage
        </button>
        <button type='button'
          className='btn btn-default diff-cancel'
          style={{ display: 'none' }}>
          Cancel
        </button>
        <button type='button'
          className='btn btn-default diff-unstage'
          style={{ display: 'none' }}>
          Unstage
        </button>
      </div>
      {this.props.sideBySide ? '' :
        <button type='button' className='btn btn-sm btn-default diff-explore'>Explore</button>}
    </div>;
  }
}
