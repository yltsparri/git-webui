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

import { AnyAction } from "redux";
import Actions from "../Actions";
import { Commits, CommitViewMode } from "../AppState";
import { Graph, Path } from "../Commit";
import { CommitInfo } from "../git/CommitInfo";

const updateGraph = (commitInfos: CommitInfo[], startAt: number) => {
  // Draw the graph
  let currentY = startAt;
  const streams = new Array<Path>();
  const circles = [];
  const paths = [];
  for (let i = startAt; i < commitInfos.length; ++i) {
    const entry = commitInfos[i];
    if (!entry) {
      break;
    }
    let index = 0;

    let j = 0;
    // Find streams to join
    let childCount = 0;
    let removedStreams = 0;
    for (j = 0; j < streams.length; ) {
      const stream = streams[j];
      if (stream.sha1 === entry.hash) {
        if (childCount === 0) {
          // Replace the stream
          stream.commands[stream.commands.length - 1].y = currentY;
          if (entry.parents.length === 0) {
            streams.splice(j, 1);
          } else {
            stream.sha1 = entry.parents[0];
          }
          index = j;
          ++j;
        } else {
          // Join the stream
          const x = index + 1;
          stream.commands[stream.commands.length - 1].y = currentY;
          stream.commands.push({ type: "L", x, y: currentY + 0.5 });
          streams.splice(j, 1);
          ++removedStreams;
        }
        ++childCount;
      } else {
        if (removedStreams !== 0) {
          stream.commands[stream.commands.length - 1].y = currentY;
        }
        ++j;
      }
    }
    // Add new streams
    for (j = 0; j < entry.parents.length; ++j) {
      const parent = entry.parents[j];
      const x = index + j + 1;
      if (j !== 0 || streams.length === 0) {
        const obj = {
          sha1: parent,
          key: entry.hash + "_" + parent,
          commands: [
            {
              type: "M",
              x: index + 1,
              y: currentY + 0.5
            },
            {
              type: "L",
              x,
              y: currentY + 1
            },
            {
              type: "L",
              x,
              y: currentY + 1.5
            }
          ]
        };
        paths.push(obj);
        streams.splice(index + j, 0, obj);
      }
    }
    for (j = index + j; j < streams.length; ++j) {
      const stream = streams[j];
      const x = j + 1;
      stream.commands[stream.commands.length - 1].y = currentY;
      stream.commands.push({ type: "L", x, y: currentY + 0.5 });
      stream.commands.push({ type: "L", x, y: currentY });
    }

    circles.push({ cx: index + 1, cy: currentY, r: 4, key: entry.hash + "c" });
    currentY++;
  }
  for (const stream of streams) {
    stream.commands[stream.commands.length - 1].y = commitInfos.length;
  }
  return {
    paths,
    circles
  };
};

export function commits(state: Commits, action: AnyAction): Commits {
  switch (action.type) {
    case "SET_COMMITS":
      const commitInfos = (action.commits as CommitInfo[]) || [];
      const graph: Graph = updateGraph(commitInfos, 0);
      return {
        ...state,
        commits: commitInfos,
        graph,
        selectedCommit:
          commitInfos.length > 0
            ? commitInfos[commitInfos.length - 1].hash
            : undefined
      };
    case Actions.SELECT_COMMIT:
      return {
        ...state,
        selectedCommit: action.selectedCommit
      };
    case Actions.SELECT_COMMIT_VIEW_MODE:
      return {
        ...state,
        viewMode: action.viewMode
      };
    default:
      return (
        state || {
          commits: new Array<CommitInfo>(),
          selectedCommit: null,
          viewMode: CommitViewMode.Diff,
          graph: { paths: [], circles: [] }
        }
      );
  }
}
