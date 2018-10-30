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
import { AppState, CommitViewMode } from "../AppState";
import { CommitInfo } from "../git/CommitInfo";
import { FileInfo } from "../git/FileInfo";
import { loadDiff } from "./Diff";
import { selectNode } from "./Tree";

export function commitSelected(commit: CommitInfo) {
  return (
    dispatch: ThunkDispatch<{}, {}, Action>,
    getState: () => AppState
  ) => {
    let state = getState();
    const root: FileInfo = {
      name: state.appData.dirName,
      size: NaN,
      objectId: commit.hash,
      isSymbolicLink: false,
      mode: 0,
      type: "tree",
      parent: undefined
    };
    dispatch({ type: Actions.SELECT_COMMIT, selectedCommit: commit.hash });

    dispatch({
      type: Actions.UPDATE_COMMIT_VIEW_DATA,
      data: { commitHash: commit.hash, path: [root], files: [] }
    });
    state = getState();
    if (state.commits.viewMode === CommitViewMode.Diff) {
      dispatch(loadDiff(commit.hash));
    } else if (state.commits.viewMode === CommitViewMode.Tree) {
      dispatch(selectNode(root));
    }
  };
}
