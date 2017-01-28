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
import { CommitInfo, RefType } from '../actions/git/CommitInfo';
import { Graph } from '../actions/Commit';

interface LogViewProps {
  commits: Array<CommitInfo>;
  active?: string;
  graph: Graph;
  onCommitClicked(commit: CommitInfo);
}

const classNames = {
  [RefType.Head]: 'label label-warning ref',
  [RefType.Unspecified]: 'label label-warning ref',
  [RefType.Remote]: 'label label-danger ref',
  [RefType.Tag]: 'label label-info ref'
};

const COLORS = ["#ffab1d", "#fd8c25", "#f36e4a", "#fc6148", "#d75ab6", "#b25ade", "#6575ff", "#7b77e9", "#4ea8ec", "#00d0f5", "#4eb94e", "#51af23", "#8b9f1c", "#d0b02f", "#d0853a", "#a4a4a4",
  "#ffc51f", "#fe982c", "#fd7854", "#ff705f", "#e467c3", "#bd65e9", "#7183ff", "#8985f7", "#55b6ff", "#10dcff", "#51cd51", "#5cba2e", "#9eb22f", "#debe3d", "#e19344", "#b8b8b8",
  "#ffd03b", "#ffae38", "#ff8a6a", "#ff7e7e", "#ef72ce", "#c56df1", "#8091ff", "#918dff", "#69caff", "#3ee1ff", "#72da72", "#71cf43", "#abbf3c", "#e6c645", "#eda04e", "#c5c5c5",
  "#ffd84c", "#ffb946", "#ff987c", "#ff8f8f", "#fb7eda", "#ce76fa", "#90a0ff", "#9c98ff", "#74cbff", "#64e7ff", "#7ce47c", "#85e357", "#b8cc49", "#edcd4c", "#f9ad58", "#d0d0d0",
  "#ffe651", "#ffbf51", "#ffa48b", "#ff9d9e", "#ff8de1", "#d583ff", "#97a9ff", "#a7a4ff", "#82d3ff", "#76eaff", "#85ed85", "#8deb5f", "#c2d653", "#f5d862", "#fcb75c", "#d7d7d7",
  "#fff456", "#ffc66d", "#ffb39e", "#ffabad", "#ff9de5", "#da90ff", "#9fb2ff", "#b2afff", "#8ddaff", "#8bedff", "#99f299", "#97f569", "#cde153", "#fbe276", "#ffc160", "#e1e1e1",
  "#fff970", "#ffd587", "#ffc2b2", "#ffb9bd", "#ffa5e7", "#de9cff", "#afbeff", "#bbb8ff", "#9fd4ff", "#9aefff", "#b3f7b3", "#a0fe72", "#dbef6c", "#fcee98", "#ffca69", "#eaeaea",
  "#763700", "#9f241e", "#982c0e", "#a81300", "#80035f", "#650d90", "#082fca", "#3531a3", "#1d4892", "#006f84", "#036b03", "#236600", "#445200", "#544509", "#702408", "#343434",
  "#9a5000", "#b33a20", "#b02f0f", "#c8210a", "#950f74", "#7b23a7", "#263dd4", "#4642b4", "#1d5cac", "#00849c", "#0e760e", "#287800", "#495600", "#6c5809", "#8d3a13", "#4e4e4e",
  "#c36806", "#c85120", "#bf3624", "#df2512", "#aa2288", "#933bbf", "#444cde", "#5753c5", "#1d71c6", "#0099bf", "#188018", "#2e8c00", "#607100", "#907609", "#ab511f", "#686868",
  "#e47b07", "#e36920", "#d34e2a", "#ec3b24", "#ba3d99", "#9d45c9", "#4f5aec", "#615dcf", "#3286cf", "#00abca", "#279227", "#3a980c", "#6c7f00", "#ab8b0a", "#b56427", "#757575",
  "#ff911a", "#fc8120", "#e7623e", "#fa5236", "#ca4da9", "#a74fd3", "#5a68ff", "#6d69db", "#489bd9", "#00bcde", "#36a436", "#47a519", "#798d0a", "#c1a120", "#bf7730", "#8e8e8e"];

const lineHeight = 54;
export default class LogView extends React.PureComponent<LogViewProps, undefined> {
  render() {
    let graph = this.updateGraph(0);
    var left = Math.max(3, graph.maxLeft) + 1;
    const xOffset = (left * 12) + 'px';
    return <div id='log-view'>
      <div>
        {graph.svg}
        {
          this.props.commits.map((commit, index) => {
            let refs = commit.refs.map((tag) => {
              return <span key={RefType[tag.type] + "_" + tag.text} className={classNames[tag.type]}>{tag.text}</span>;
            });
            const className = this.props.active === commit.hash ? "log-entry list-group-item active" : "log-entry list-group-item";
            return <span data-index={index.toString()} onClick={this.handleCommitClick} key={commit.hash} className={className} style={{ paddingLeft: xOffset, height: lineHeight + 'px' }}>
              <header >
                <h6><a target="_blank" href={"mailto:" + commit.author.email}>{commit.author.name}</a></h6>
                {refs}
                <span className="log-entry-date">{commit.author.date.toLocaleString()}&nbsp;</span>
                <span className="badge">{commit.hash.substring(0, 7)}</span>
              </header>
              <p className="list-group-item-text">{commit.message}</p>
            </span>;
          })
        }</div>
    </div>;
  }

  updateGraph = (startAt) => {
    const graph = this.props.graph;
    const commits = this.props.commits;
    const xOffset = 12;
    const yOffset = (startAt + 0.5) * lineHeight;
    let maxLeft = 0;
    // Draw the graph
    let circles = graph.circles.map(entry => {
      maxLeft = Math.max(maxLeft, entry.cx);
      return <circle
        cx={entry.cx * xOffset}
        cy={entry.cy * lineHeight + yOffset}
        r={entry.r}
        key={entry.key}></circle>;
    });
    let lines = graph.paths.map((stream, index) => {
      const d = stream.commands.map(cmd => cmd.type + ' ' + (cmd.x * xOffset) + ' ' + (cmd.y * lineHeight)).join(' ');
      const colorIndex = index < COLORS.length ? index : index % COLORS.length;
      return <path style={{ stroke: COLORS[colorIndex] }} key={stream.key} d={d}></path>;
    });
    return {
      svg: <svg height={lineHeight * commits.length}>{lines}{circles}</svg>,
      maxLeft: maxLeft
    };
  }

  private handleCommitClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget as HTMLElement;
    if (target.dataset['index']) {
      const index = parseInt(target.dataset['index']);
      if (Number.isInteger(index)) {
        this.props.onCommitClicked(this.props.commits[index]);
      }
    }
  }
}
