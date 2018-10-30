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

import * as React from "react";
import { CommitViewMode } from "../actions/AppState";
import { Graph } from "../actions/Commit";
import { CommitInfo } from "../actions/git/CommitInfo";
import { LogView } from "./LogView";

export interface HistoryViewDataProps {
  commitHash?: string;
  diffViewMode: CommitViewMode;
  commits: CommitInfo[];
  graph: Graph;
  CommitView: React.ComponentClass<any>;
  Explore: React.ComponentClass<any>;
}

export interface HistoryViewDispatchProps {
  onCommitClicked: (commit: CommitInfo) => void;
  selectDiffViewMode: (mode: CommitViewMode) => void;
}

interface HistoryViewProps
  extends HistoryViewDataProps,
    HistoryViewDispatchProps {}

export class HistoryView extends React.PureComponent<HistoryViewProps> {
  public render() {
    const { commits, diffViewMode, commitHash, graph, CommitView } = this.props;

    return (
      <div id="history-view">
        <LogView
          commits={commits}
          onCommitClicked={this.props.onCommitClicked}
          active={commitHash}
          graph={graph}
        />
        <div id="commit-view" style={{ display: "flex" }}>
          <div id="commit-view-header">
            <ul className="nav nav-pills nav-justified" role="tablList">
              <li
                onClick={this.selectDiffViewModeDiff}
                className={diffViewMode === CommitViewMode.Diff ? "active" : ""}
              >
                <a href="#" onClick={this.preventDefault}>
                  Commit
                </a>
              </li>
              <li
                onClick={this.selectDiffViewModeTree}
                className={diffViewMode === CommitViewMode.Tree ? "active" : ""}
              >
                <a href="#" onClick={this.preventDefault}>
                  Tree
                </a>
              </li>
            </ul>
          </div>
          <CommitView />
        </div>
      </div>
    );
  }

  private preventDefault = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  }

  private selectDiffViewModeDiff = () =>
    this.props.selectDiffViewMode(CommitViewMode.Diff)

  private selectDiffViewModeTree = () =>
    this.props.selectDiffViewMode(CommitViewMode.Tree)
}
