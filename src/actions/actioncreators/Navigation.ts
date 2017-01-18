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

import Git from '../git/Git';
import { AppMode, SelectedItem, NavigationType } from '../AppState';
import Actions from '../Actions';
import Commit from './Commit';
import Messages from './Messages';

export function itemSelected(item: SelectedItem) {
  return (dispatch) => {
    dispatch({ type: Actions.UPDATE_BASEDATA, data: { selectedItem: item } });
    if (item.type === NavigationType.LocalBranches ||
      item.type === NavigationType.RemoteBranches ||
      item.type === NavigationType.Tags) {
      dispatch(dispatch => Git.getCommits(1000, item.name)
        .then((response) => {
          if (response.returnCode === 0) {
            dispatch({ type: Actions.SET_COMMITS, commits: response.data });
            if (response.data.length) {
              dispatch(Commit.commitSelected(response.data[0]));
            }
          }
          if (response.message) {
            dispatch(Messages.addResponseMessage(response));
          }
        })
        .catch((error) => {
          dispatch(Messages.addResponseMessage(error.message));
        }));
    }
  };
}

export default {
  itemSelected,
  changeAppMode: (mode: AppMode) => {
    return { type: Actions.UPDATE_BASEDATA, data: { mode } };
  }
};
