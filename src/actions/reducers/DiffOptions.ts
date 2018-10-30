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
import { DiffOptions } from "../AppState";

export function diffOptions(
  state: DiffOptions,
  action: AnyAction
): DiffOptions {
  switch (action.type) {
    case Actions.UPDATE_COMMIT_VIEW_DATA:
      return { ...state, ...action.data };
    case Actions.TOGGLE_SHOW_FULL_FILE:
      return {...state,  fullFile: !state.fullFile};
    case Actions.TOGGLE_IGNORE_WHITESPACE:
      return {...state, 
        ignoreWhitespace: !state.ignoreWhitespace};
  }
  return (
    state || {
      ignoreWhitespace: false,
      context: 3,
      fullFile: false,
      options: null
    }
  );
}
