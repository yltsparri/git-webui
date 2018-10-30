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

import React from "react";
import { CommitViewMode } from "../actions/AppState";
import { FileDiff } from "../actions/git/Diff";
import { FileInfo } from "../actions/git/FileInfo";
import { DiffView, DiffViewMode } from "./DiffView";
import { TreeView } from "./TreeView";

export interface CommitViewStateProps {
  diff: FileDiff[];
  headerLines: string[];
  ignoreWhitespace: boolean;
  diffContext: number;
  fullFileDiff: boolean;
  diffViewMode: CommitViewMode;
  path: FileInfo[];
  files: FileInfo[];
}

export interface CommitViewActionProps {
  toggleIgnoreWhiteSpace: () => void;
  updateDiffContext: (diffContext: number) => void;
  onNodeSelected: (node: FileInfo) => void;
  toggleShowFullFile: () => void;
  onExloreClicked: () => void;
}

interface CommitViewProps extends CommitViewStateProps, CommitViewActionProps {}

export class CommitView extends React.PureComponent<CommitViewProps> {
  public render() {
    const { diff, path, files, diffViewMode, onNodeSelected } = this.props;
    const renderedButtons =
      diffViewMode === CommitViewMode.Diff ? this.renderButtons() : null;
    return (
      <div className="diff-view-container panel panel-default">
        {renderedButtons}
        <div className="panel-body">
          {diffViewMode === CommitViewMode.Diff ? (
            <DiffView
              diff={diff}
              headerLines={this.props.headerLines}
              diffViewMode={DiffViewMode.Full}
            />
          ) : (
            <TreeView
              path={path}
              files={files}
              onNodeSelected={onNodeSelected}
            />
          )}
        </div>
      </div>
    );
  }

  public renderButtons = () => {
    const {
      ignoreWhitespace,
      fullFileDiff,
      diffContext,
      toggleIgnoreWhiteSpace,
      toggleShowFullFile,
      updateDiffContext,
      onExloreClicked
    } = this.props;
    const ignoreWhitespaceClass =
      "btn btn-sm btn-default diff-ignore-whitespace" +
      (ignoreWhitespace ? " active" : "");
    const allFile = fullFileDiff;
    const completeFileClass =
      "btn btn-sm btn-default diff-context-all" + (allFile ? " active" : "");

    const onClickMinus = () => updateDiffContext(diffContext - 1);
    const onClickPlus = () => updateDiffContext(diffContext + 1);
    return (
      <div className="panel-heading btn-toolbar" role="toolbar">
        <button
          type="button"
          className={ignoreWhitespaceClass}
          data-toggle="button"
          aria-pressed={ignoreWhitespace}
          onClick={toggleIgnoreWhiteSpace}
        >
          Ignore Whitespace
        </button>
        <button
          type="button"
          className={completeFileClass}
          data-toggle="button"
          aria-pressed={allFile}
          onClick={toggleShowFullFile}
        >
          Complete file
        </button>
        <div className="btn-group btn-group-sm">
          <span>{"Context:\u00A0" + diffContext}</span>
          {"\u00A0"}
          <button
            type="button"
            className="btn btn-default diff-context-remove"
            onClick={onClickMinus}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-default diff-context-add"
            onClick={onClickPlus}
          >
            +
          </button>
        </div>
        <div className="btn-group btn-group-sm diff-selection-buttons">
          <button
            type="button"
            className="btn btn-default diff-stage"
            style={{ display: "none" }}
          >
            Stage
          </button>
          <button
            type="button"
            className="btn btn-default diff-cancel"
            style={{ display: "none" }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-default diff-unstage"
            style={{ display: "none" }}
          >
            Unstage
          </button>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-default diff-explore"
          onClick={onExloreClicked}
        >
          Explore
        </button>
      </div>
    );
  }
}
