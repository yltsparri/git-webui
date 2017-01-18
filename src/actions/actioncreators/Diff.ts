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
import FileInfo from '../git/FileInfo';
import { AppState, CommitViewMode, } from '../AppState';
import Actions from '../Actions';
import Messages from './Messages';
import Tree from './Tree';

const loadDiff = (commit: string) => {
  return (dispatch, getState: () => AppState) => {
    const state = getState() as AppState;
    const { ignoreWhitespace, options, context, fullFile } = state.diffOptions;
    let diffContext = context;
    if (fullFile) {
      diffContext = 99999999;
    }
    return Git.getDiff(commit, diffContext, ignoreWhitespace, options, null)
      .then(response => {
        dispatch({ type: Actions.UPDATE_COMMIT_DIFF_DATA, data: response.data });
        if (response.message) {
          dispatch(Messages.addResponseMessage(response));
        }
      });
  };
};

export function selectDiffViewMode(mode: CommitViewMode) {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: Actions.SELECT_COMMIT_VIEW_MODE, viewMode: mode });
    let state = getState() as AppState;
    let opts = state.commitTree;
    if (mode === CommitViewMode.Tree && opts.path.length < 2 && !opts.files.length) {
      let root: FileInfo;
      if (opts.path.length) {
        root = opts.path[opts.path.length - 1];
      }
      else {
        root = {
          name: state.baseData.dirName,
          size: NaN,
          objectId: state.commits.selectedCommit,
          isSymbolicLink: false,
          mode: 0,
          type: 'tree',
          parent: null
        };
      }
      dispatch(Tree.selectNode(root));
    }
  };
}

export function setDiffContext(context: number) {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { context: context } });
    const state = getState();
    if (!state.diffOptions.fullFile) {
      let commitHash = state.commits.selectedCommit;
      dispatch(loadDiff(commitHash));
    }
  };
}

export function toggleIgnoreWhiteSpace() {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: Actions.TOGGLE_IGNORE_WHITESPACE });
    let commitHash = getState().commits.selectedCommit;
    dispatch(loadDiff(commitHash));
  };
}

export function toggleShowFullFile() {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: Actions.TOGGLE_SHOW_FULL_FILE });
    let commitHash = getState().commits.selectedCommit;
    dispatch(loadDiff(commitHash));
  };
}

export function selectFile(index: number) {
  return { type: 'SELECT_COMMIT_DIFF_FILE', selectedFile: index };
}

export default {
  loadDiff,
  selectDiffViewMode,
  setDiffContext,
  toggleIgnoreWhiteSpace,
  toggleShowFullFile,
  selectFile
};
