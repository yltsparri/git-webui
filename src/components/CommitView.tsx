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
import { DiffViewMode, Diff } from '../actions/AppState';
import FileInfo from '../actions/git/FileInfo';

interface Button {
  name: string;
  id: string;
}

interface CommitViewProps {
  onClicked(button: Button);
  hunkSelectionAllowed: boolean;
  contextButtons: boolean;
  diff: Diff;
  ignoreWhitespace: boolean;
  diffContext: number;
  fullFileDiff: boolean;
  gitDiffOpts?: Array<string>;
  gitFile?: string;
  diffViewMode: DiffViewMode;
  path: Array<FileInfo>;
  files: Array<FileInfo>;
  toggleIgnoreWhiteSpace();
  updateDiffContext(diffContext: number);
  onNodeSelected(node: FileInfo);
  toggleShowFullFile();
  onExloreClicked();
}

export default class CommitView extends React.PureComponent<CommitViewProps, undefined>{
  render() {
    const {diff, path, files, diffViewMode, onNodeSelected} = this.props;
    let renderedButtons = diffViewMode === DiffViewMode.Explore ?
      null :
      this.renderButtons();
    return <div className='diff-view-container panel panel-default'>
      {renderedButtons}
      <div className='panel-body'>
        {diffViewMode === DiffViewMode.Diff ?
          <DiffView diff={diff} /> :
          <TreeView path={path}
            files={files}
            onNodeSelected={onNodeSelected} />}
      </div>
    </div>;
  }

  renderButtons = () => {
    const {
      ignoreWhitespace,
      fullFileDiff,
      diffContext,
      diffViewMode,
      toggleIgnoreWhiteSpace,
      toggleShowFullFile,
      updateDiffContext,
      onExloreClicked} = this.props;
    const ignoreWhitespaceClass = 'btn btn-sm btn-default diff-ignore-whitespace' +
      (ignoreWhitespace ? ' active' : '');
    const allFile = fullFileDiff;
    const completeFileClass = 'btn btn-sm btn-default diff-context-all' + (allFile ? ' active' : '');

    return <div className='panel-heading btn-toolbar' role='toolbar'>
      <button type='button'
        className={ignoreWhitespaceClass}
        data-toggle='button'
        aria-pressed={ignoreWhitespace}
        onClick={toggleIgnoreWhiteSpace}>
        Ignore Whitespace
      </button>
      <button type='button'
        className={completeFileClass}
        data-toggle='button'
        aria-pressed={allFile}
        onClick={() => toggleShowFullFile()}>
        Complete file
      </button>
      <div className='btn-group btn-group-sm'>
        <span>{'Context:\u00A0' + diffContext}</span>{'\u00A0'}
        <button type='button'
          className='btn btn-default diff-context-remove'
          onClick={() => updateDiffContext(diffContext - 1)}>
          -
        </button>
        <button type='button'
          className='btn btn-default diff-context-add'
          onClick={() => updateDiffContext(diffContext + 1)}>
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
      {
        diffViewMode === DiffViewMode.Explore ? '' :
          <button type='button' className='btn btn-sm btn-default diff-explore' onClick={onExloreClicked}>
            Explore
        </button>
      }
    </div>;
  }
}
