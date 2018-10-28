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
import FileInfo from "../git/FileInfo";
import Git from "../git/Git";
import Messages from "./Messages";

export function selectNode(node: FileInfo) {
  return (dispatch: ThunkDispatch<{}, {}, Action>) => {
    dispatch({
      type: Actions.SELECT_COMMIT_TREE_FILE,
      objectId: node.objectId
    });
    if (node.type === "tree") {
      return Git.listFiles(node.objectId).then(response => {
        dispatch({ type: Actions.SET_COMMIT_TREE_FILES, files: response.data });
        if (response.message) {
          dispatch(Messages.addMessage(response.message));
        }
      });
    }
    return new Promise<void>(resolve => resolve());
  };
}

export default { selectNode };
