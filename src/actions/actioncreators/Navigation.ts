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

import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Actions from "../Actions";
import { AppMode, AppState, NavigationNode, NavigationType } from "../AppState";
import Git from "../git/Git";
import Commit from "./Commit";
import Messages from "./Messages";

const loadCommits = (
  dispatch: ThunkDispatch<{}, {}, Action>,
  item: { text: string }
) =>
  Git.getCommits(1000, item.text)
    .then(response => {
      if (response.returnCode === 0) {
        dispatch({ type: Actions.SET_COMMITS, commits: response.data });
        if (response.data && response.data.length) {
          dispatch(Commit.commitSelected(response.data[0]));
        }
      }
      if (response.message) {
        dispatch(Messages.addMessage(response.message));
      }
    })
    .catch(error => {
      dispatch(Messages.addMessage(error.message));
    });

export function itemSelected(itemId: string) {
  return (
    dispatch: ThunkDispatch<{}, {}, Action>,
    getState: () => AppState
  ) => {
    dispatch({ type: Actions.NODE_SELECTED, data: { selected: itemId } });
    const state = getState();
    const nav = state.navigation;
    const item: NavigationNode = nav.nodes[itemId];
    if (!item) {
      return;
    }
    let parent: NavigationNode = nav.nodes[item.parentId];
    while (parent && parent.parentId) {
      parent = nav.nodes[parent.parentId];
    }
    if (
      parent &&
      (parent.id === NavigationType.LocalBranches ||
        parent.id === NavigationType.RemoteBranches ||
        parent.id === NavigationType.Tags)
    ) {
      loadCommits(dispatch, item);
    }
  };
}

const showMore = (id: string) => {
  return { type: Actions.SHOW_ALL, data: { id } };
};

export default {
  itemSelected,
  showMore,
  changeAppMode: (mode: AppMode) => {
    return { type: Actions.UPDATE_BASEDATA, data: { mode } };
  }
};
