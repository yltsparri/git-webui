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

import { CommitInfo } from '../git/CommitInfo';
import { Commits, CommitViewMode } from '../AppState';
import Actions from '../Actions';
import {Graph} from '../Commit';

const updateGraph = (commits, startAt) => {
  // Draw the graph
  var currentY = startAt;
  let streams = [];
  const circles = [];
  const paths = [];
  for (var i = startAt; i < commits.length; ++i) {
    var entry = commits[i];
    if (!entry) {
      break;
    }
    var index = 0;

    // Find streams to join
    var childCount = 0;
    var removedStreams = 0;
    for (var j = 0; j < streams.length;) {
      var stream = streams[j];
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
          var x = (index + 1);
          stream.commands[stream.commands.length - 1].y = currentY;
          stream.commands.push({ type: 'L', x, y: currentY + 0.5});
          streams.splice(j, 1);
          ++removedStreams;
        }
        ++childCount;
      } else {
        if (removedStreams !== 0) {
          var x = j + 1;
          stream.commands[stream.commands.length - 1].y = currentY;
        }
        ++j;
      }
    }

    // Add new streams
    for (var j = 0; j < entry.parents.length; ++j) {
      var parent = entry.parents[j];
      var x = (index + j + 1);
      if (j !== 0 || streams.length === 0) {
        var obj = {
          sha1: parent,
          key: entry.hash + '_' + parent,
          commands: [{
            type: 'M',
            x: index + 1,
            y: currentY + 0.5
          },
          {
            type: 'L',
            x: x,
            y: currentY + 1
          },
          {
            type: 'L',
            x: x,
            y: currentY + 1.5
          }]
        };
        paths.push(obj);
        streams.splice(index + j, 0, obj);
      }
    }
    for (var j = index + j; j < streams.length; ++j) {
      var stream = streams[j];
      var x = (j + 1);
      stream.commands[stream.commands.length - 1].y = currentY;
      stream.commands.push({ type: "L", x, y: currentY + 0.5});
      stream.commands.push({ type: "L", x});
    }

    circles.push({ cx: (index + 1), cy: currentY, r: 4, key: entry.hash + 'c' });
    currentY++;
  }
  for (var idx = 0; idx < streams.length; ++idx) {
    var stream = streams[idx];
    stream.commands[stream.commands.length - 1].y = commits.length;
  }
  return {
    paths, circles
  };
};

export function commits(state: Commits, action): Commits {
  switch (action.type) {
    case 'SET_COMMITS':
      const commits = action.commits as Array<CommitInfo> || [];
      const graph: Graph = updateGraph(commits, 0);
      return Object.assign({}, state, {
        commits: commits,
        graph,
        selectedCommit: commits.length > 0 ? commits[commits.length - 1].hash : null
      });
    case Actions.SELECT_COMMIT:
      return Object.assign({}, state, {
        selectedCommit: action.selectedCommit
      });
    case Actions.SELECT_COMMIT_VIEW_MODE:
      return Object.assign({}, state, {
        viewMode: action.viewMode
      });
    default:
      return state || {
        commits: new Array<CommitInfo>(),
        selectedCommit: null,
        viewMode: CommitViewMode.Diff,
        graph: { paths: [], circles: [] }
      };
  }
};
