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

import { AppData, AppMode, SelectedItem, NavigationType } from '../AppState';
import Actions from '../Actions';

export function baseData(state: AppData, action): AppData {
  switch (action.type) {
    case Actions.SET_DIRNAME:
      const dirName = action.dirName;
      return Object.assign({}, state, { dirName });
    case Actions.SET_VIEW_ONLY:
      const viewOnly = action.viewOnly;
      return Object.assign({}, state, { viewOnly });
    case Actions.UPDATE_BASEDATA:
      let item = action.data.selectedItem as SelectedItem;
      if (action.data.selectedItem) {
        let mode: AppMode;
        switch (item.type) {
          case NavigationType.Workspace:
            mode = AppMode.Workspace;
          case NavigationType.RemoteAccess:
            mode = AppMode.RemoteAccess;
          case NavigationType.LocalBranches:
          case NavigationType.RemoteBranches:
          case NavigationType.Tags:
            mode = AppMode.History;
        }
        return Object.assign({}, state, action.data, { mode });
      }
      return Object.assign({}, state, action.data);
    case Actions.ADD_MESSAGE:
      return Object.assign({}, state, { messages: (state.messages ? state.messages + '\n' : '') + action.message });
    case Actions.CLOSE_MESSAGE:
      return Object.assign({}, state, { messages: null });
    case Actions.UPDATE_COMMIT_VIEW_DATA:

  }
  return state || {
    dirName: '',
    viewOnly: true,
    selectedItem: { name: null, type: NavigationType.LocalBranches },
    mode: AppMode.History,
    messages: null
  };
};
