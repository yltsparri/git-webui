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

import { CommitInfo } from './git/CommitInfo';
import GitBranch from './git/GitBranch';
import GitBrancesResponse from './git/GitBrancesResponse';
import BranchStatus from './git/BranchStatus';
import FileInfo from './git/FileInfo';
import Git from './git/Git';
import { AppMode, AppState, CommitViewMode } from './AppState';
import Actions from './Actions';
import GitResponse from './git/GitResponse';

const git = new Git();
const loadDiff = (commit: string) => {
  return (dispatch, getState: () => AppState) => {
    const state = getState() as AppState;
    const { ignoreWhitespace, gitDiffOpts, gitFile, fullFileDiff } = state.historyViewOptions;
    let diffContext = state.historyViewOptions.diffContext;
    if (fullFileDiff) {
      diffContext = 99999999;
    }
    return git.getDiff(commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile)
      .then(response => {
        dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { diff: response.data } });
        if (response.message) {
          dispatch(addResponseMessage(response));
        }
      });
  };
};

export function loadNode(node: FileInfo) {
  return (dispatch, getState: () => AppState) => {
    let state = getState() as AppState;
    let index = state.historyViewOptions.path.findIndex(item => item.objectId === node.objectId);
    if (index >= 0) {
      if (index < state.historyViewOptions.path.length - 1) {
        dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { path: state.historyViewOptions.path.slice(0, index + 1), files: [] } });
      }
    }
    else {
      dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { path: state.historyViewOptions.path.concat(node), files: [] } });
    }
    if (node.type === 'tree') {
      return git.listFiles(node.objectId)
        .then(response => {
          state = getState() as AppState;
          dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { files: response.data } });
          if (response.message) {
            dispatch(addResponseMessage(response));
          }
        });
    }
  };
};

export function commitSelected(commit: CommitInfo) {
  return (dispatch, getState: () => AppState) => {
    let state = getState();
    let root: FileInfo = {
      name: state.baseData.dirName,
      size: NaN,
      objectId: commit.hash,
      isSymbolicLink: false,
      mode: 0,
      type: 'tree',
      parent: null
    };
    dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { commitHash: commit.hash, path: [root], files: [] } });
    state = getState();
    if (state.historyViewOptions.diffViewMode === CommitViewMode.Diff) {
      dispatch(loadDiff(commit.hash));
    }
    else if (state.historyViewOptions.diffViewMode === CommitViewMode.Tree) {
      dispatch(loadNode(root));
    }
  };
}

export function selectDiffViewMode(mode: CommitViewMode) {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { diffViewMode: mode } });
    let state = getState() as AppState;
    let opts = state.historyViewOptions;
    if (mode === CommitViewMode.Tree && opts.path.length < 2 && !opts.files.length) {
      let root: FileInfo;
      if (opts.path.length) {
        root = opts.path[opts.path.length - 1];
      }
      else {
        root = {
          name: state.baseData.dirName,
          size: NaN,
          objectId: opts.commitHash,
          isSymbolicLink: false,
          mode: 0,
          type: 'tree',
          parent: null
        };
      }
      dispatch(loadNode(root));
    }
  };
}

export function setDiffContext(context: number) {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { diffContext: context } });
    const options = getState().historyViewOptions;
    if (!options.fullFileDiff) {
      let commitHash = options.commitHash;
      dispatch(loadDiff(commitHash));
    }
  };
}

export function toggleIgnoreWhiteSpace() {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: Actions.TOGGLE_IGNORE_WHITESPACE });
    let commitHash = getState().historyViewOptions.commitHash;
    dispatch(loadDiff(commitHash));
  };
}

export function toggleShowFullFile() {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: Actions.TOGGLE_SHOW_FULL_FILE });
    let commitHash = getState().historyViewOptions.commitHash;
    dispatch(loadDiff(commitHash));
  };
}

export function itemSelected(b) {
  return (dispatch) => {
    dispatch({ type: Actions.UPDATE_BASEDATA, data: b });
    if (b.mode === AppMode.LocalBranches || b.mode === AppMode.RemoteBranches || b.mode === AppMode.Tags) {
      dispatch(dispatch => git.getCommits(1000, b.selectedItem)
        .then((response) => {
          if (response.returnCode === 0) {
            dispatch({ type: Actions.SET_COMMITS, commits: response.data });
            if (response.data.length) {
              dispatch(commitSelected(response.data[0]));
            }
          }
          if (response.message) {
            dispatch(addResponseMessage(response));
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(addMessage(error.message));
        }));
    }
  };
}

export function initState() {
  return (dispatch) => {
    return git.getDirName()
      .then(response => {
        if (response.returnCode === 0) {
          dispatch({
            type: Actions.UPDATE_BASEDATA,
            data: {
              dirName: response.data
            }
          });
          if (response.message) {
            dispatch(addResponseMessage(response));
          }
          dispatch((dispatch) => git.getViewOnly()
            .then(response => {
              dispatch({
                type: Actions.UPDATE_BASEDATA,
                data: {
                  viewOnly: response.data === "1"
                }
              });
              if (response.message) {
                dispatch(addResponseMessage(response));
              }
            }));

          dispatch((dispatch) => git.getLocalBranches()
            .then((response: GitBrancesResponse) => {
              dispatch({
                type: Actions.SET_LOCAL_BRANCHES,
                data: response.data
              });
              if (response.message) {
                dispatch(addResponseMessage(response));
              }

              let active: GitBranch = response.data.find(b => b.status === BranchStatus.Current);
              if (active) {
                dispatch(itemSelected({ selectedItem: active.name, mode: AppMode.LocalBranches }));
              }
              if (response.message) {
                dispatch(addResponseMessage(response));
              }
            }).catch((error) => {
              console.log(error);
              dispatch(addMessage(error.message));
            }));

          dispatch((dispatch) => git.getRemoteBranches()
            .then((response: GitBrancesResponse) => {
              dispatch({
                type: Actions.SET_REMOTE_BRANCHES,
                data: response.data
              });
              if (response.message) {
                dispatch(addResponseMessage(response));
              }
            }).catch((error) => {
              console.log(error);
              dispatch(addMessage(error.message));
            }));

          dispatch((dispatch) => git.getTags()
            .then((response: GitBrancesResponse) => {
              dispatch({
                type: Actions.SET_TAGS_BRANCHES,
                data: response.data
              });
              if (response.message) {
                dispatch(addResponseMessage(response));
              }
            }).catch((error) => {
              console.log(error);
              dispatch(addMessage(error.message));
            }));
        }
      });
  };
}

function addMessage(message: string) {
  return { type: Actions.ADD_MESSAGE, message: message };
}

function addResponseMessage<T>(response: GitResponse<T>) {
  return { type: Actions.ADD_MESSAGE, message: response.message };
}

function closeMessage() {
  return { type: 'CLOSE_MESSAGE' };
}
export default {
  commitSelected,
  itemSelected,
  initState,
  selectDiffViewMode,
  loadNode,
  setDiffContext,
  toggleIgnoreWhiteSpace,
  toggleShowFullFile,
  closeMessage
};
