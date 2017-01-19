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

import { CommitTree } from '../AppState';
import Actions from '../Actions';

export function commitTree(state: CommitTree, action): CommitTree {
  switch (action.type) {
    case Actions.SET_DIRNAME:
      if (action.dirName) {
        let root;
        if (state.path.length) {
          root = Object.assign({}, state.path[0], { name: action.data.dirName });
        }
        else {
          root = {
            name: action.dirName,
            size: NaN,
            objectId: null,
            isSymbolicLink: false,
            mode: 0,
            type: 'tree',
            parent: null
          };
        }
        return {
          path: [root],
          files: []
        };
      }
    case Actions.SELECT_COMMIT:
      let root;
      if (state.path.length) {
        root = Object.assign({}, state.path[0], { objectId: action.selectedCommit });
      }
      else {
        root = {
          name: action.selectedCommit,
          size: NaN,
          objectId: action.selectedCommit,
          isSymbolicLink: false,
          mode: 0,
          type: 'tree',
          parent: null
        };
      }
      return {
        path: [root],
        files: []
      };
    case Actions.SET_COMMIT_TREE_FILES:
      return {
        path: state.path,
        files: action.files
      };
    case Actions.SELECT_COMMIT_TREE_FILE:
      const currentIndex = state.path.findIndex(file => file.objectId === action.objectId);
      if (currentIndex > -1) {
        return {
          path: state.path.slice(0, currentIndex + 1),
          files: state.files
        };
      }
      const fileIndex = state.files.findIndex(file => file.objectId === action.objectId);
      if (fileIndex > -1) {
        return {
          path: state.path.concat(state.files.slice(fileIndex, fileIndex + 1)),
          files: state.files
        };
      }
  }
  return state || {
    path: [],
    files: []
  };
}
