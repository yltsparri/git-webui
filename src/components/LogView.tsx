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
import { Graph } from "../actions/Commit";
import { CommitInfo, RefType } from "../actions/git/CommitInfo";
import { COLORS } from "./Colors";

interface LogViewProps {
  commits: CommitInfo[];
  active?: string;
  graph: Graph;
  onCommitClicked: (commit: CommitInfo) => void;
}

const classNames = {
  [RefType.Head]: "label label-warning ref",
  [RefType.Unspecified]: "label label-warning ref",
  [RefType.Remote]: "label label-danger ref",
  [RefType.Tag]: "label label-info ref"
};

const lineHeight = 54;
export default class LogView extends React.PureComponent<LogViewProps> {
  public render() {
    const graph = this.updateGraph(0);
    const left = Math.max(3, graph.maxLeft) + 1;
    const xOffset = left * 12 + "px";
    return (
      <div id="log-view">
        <div>
          {graph.svg}
          {this.props.commits.map((commit, index) => {
            const refs = commit.refs!.map(tag => {
              return (
                <span
                  key={RefType[tag.type] + "_" + tag.text}
                  className={classNames[tag.type]}
                >
                  {tag.text}
                </span>
              );
            });
            const className =
              this.props.active === commit.hash
                ? "log-entry list-group-item active"
                : "log-entry list-group-item";
            return (
              <span
                data-index={index.toString()}
                onClick={this.handleCommitClick}
                key={commit.hash}
                className={className}
                style={{ paddingLeft: xOffset, height: lineHeight + "px" }}
              >
                <header>
                  <h6>
                    <a target="_blank" href={"mailto:" + commit.author.email}>
                      {commit.author.name}
                    </a>
                  </h6>
                  {refs}
                  <span className="log-entry-date">
                    {commit.author.date.toLocaleString()}
                    &nbsp;
                  </span>
                  <span className="badge">{commit.hash.substring(0, 7)}</span>
                </header>
                <p className="list-group-item-text">{commit.message}</p>
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  public updateGraph = (startAt: number) => {
    const graph = this.props.graph;
    const commits = this.props.commits;
    const xOffset = 12;
    const yOffset = (startAt + 0.5) * lineHeight;
    let maxLeft = 0;
    // Draw the graph
    const circles = graph.circles.map(entry => {
      maxLeft = Math.max(maxLeft, entry.cx);
      return (
        <circle
          cx={entry.cx * xOffset}
          cy={entry.cy * lineHeight + yOffset}
          r={entry.r}
          key={entry.key}
        />
      );
    });
    const lines = graph.paths.map((stream, index) => {
      const d = stream.commands
        .map(cmd => cmd.type + " " + cmd.x * xOffset + " " + cmd.y * lineHeight)
        .join(" ");
      const colorIndex = index < COLORS.length ? index : index % COLORS.length;
      return (
        <path style={{ stroke: COLORS[colorIndex] }} key={stream.key} d={d} />
      );
    });
    return {
      svg: (
        <svg height={lineHeight * commits.length}>
          {lines}
          {circles}
        </svg>
      ),
      maxLeft
    };
  }

  private handleCommitClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    if (target.dataset.index) {
      const index = parseInt(target.dataset.index!, 10);
      if (Number.isInteger(index)) {
        this.props.onCommitClicked(this.props.commits[index]);
      }
    }
  }
}
