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

export function commits(state: Commits, action): Commits {
  switch (action.type) {
    case 'SET_COMMITS':
      const commits = action.commits as Array<CommitInfo> || [];
      return Object.assign({}, state, {
        commits: commits,
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
        viewMode: CommitViewMode.Diff
      };
  }
};
