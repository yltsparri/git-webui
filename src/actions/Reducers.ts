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

import assign from 'lodash/object/assign';
import { GitBranch } from './git/Git';
import { CommitInfo } from '../actions/git/CommitInfo';
import { HistoryViewOptions, BaseData, AppMode } from '../actions/AppState';

export function historyViewOptionsReducer(state: HistoryViewOptions, action): HistoryViewOptions {
  switch (action.type) {
    case 'UPDATE_COMMIT_VIEW_DATA':
      return assign({}, state, action.data);
  }
  return state || {
    commitHash: '',
    diff: null,
    diffContext: 3,
    ignoreWhitespace: false
  };
};

export function baseDataReducer(state: BaseData, action): BaseData {
  switch (action.type) {
    case 'UPDATE_BASEDATA':
      return assign({}, state, action.data);
    case 'ADD_MESSAGE':
      return assign({}, state, { messages: (state.messages ? state.messages + '\n' : '') + action.message });
    case 'CLOSE_MESSAGE':
      return assign({}, state, { messages: null });
  }
  return state || {
    dirName: '',
    viewOnly: true,
    selectedItem: null,
    mode: AppMode.LocalBranches,
    messages: null
  };
};

export function getBranchDataReducer(key: string) {
  return (state: Array<GitBranch>, action): Array<GitBranch> => {
    switch (action.type) {
      case 'SET_' + key + '_BRANCHES':
        return action.data;
      default:
        return state || [];
    }
  };
};

export function commitsReducer(state: Array<CommitInfo>, action): Array<CommitInfo> {
  switch (action.type) {
    case 'SET_COMMITS':
      return action.commits as Array<CommitInfo>;
    default:
      return state || [];
  }
};
