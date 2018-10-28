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
import { AppData, AppMode, NavigationType } from "../AppState";

export function appData(state: AppData, action: AnyAction): AppData {
  switch (action.type) {
    case Actions.SET_DIRNAME:
      const dirName = action.dirName;
      return Object.assign({}, state, { dirName });
    case Actions.SET_VIEW_ONLY:
      const viewOnly = action.viewOnly;
      return Object.assign({}, state, { viewOnly });
    case Actions.NODE_SELECTED:
      let mode: AppMode = AppMode.History;
      if (action.data.selected === NavigationType.RemoteAccess) {
        mode = AppMode.RemoteAccess;
      }
      if (action.data.selected === NavigationType.Workspace) {
        mode = AppMode.Workspace;
      }
      return Object.assign({}, state, action.data, { mode });
    case Actions.UPDATE_BASEDATA:
      return Object.assign({}, state, action.data);
    case Actions.ADD_MESSAGE:
      return Object.assign({}, state, {
        messages: (state.messages ? state.messages + "\n" : "") + action.message
      });
    case Actions.CLOSE_MESSAGE:
      return Object.assign({}, state, { messages: null });
    case Actions.SHOW_ALL:
      return Object.assign({}, state, { showAll: action.type });
  }
  return (
    state || {
      dirName: "",
      viewOnly: true,
      mode: AppMode.History,
      messages: null,
      showAll: null
    }
  );
}
