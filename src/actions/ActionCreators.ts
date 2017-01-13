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
import { AppMode, AppState, DiffViewMode } from './AppState';

const git = new Git();
const loadDiff = (commit: CommitInfo) => {
  return (dispatch, getState: () => AppState) => {
    const state = getState() as AppState;
    const { diffContext, ignoreWhitespace, gitDiffOpts, gitFile } = state.historyViewOptions;
    return git.getDiff(commit.hash, diffContext, ignoreWhitespace, gitDiffOpts, gitFile)
      .then(diff => {
        dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { diff: diff.data } });
        if (diff.message) {
          dispatch({ type: 'ADD_MESSAGE', message: diff.message });
        }
      });
  };
};

export function loadTree(parent: string) {
  return (dispatch) => {
    return git.listFiles(parent)
      .then(response => {
        dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { files: response.data } });
        if (response.message) {
          dispatch({ type: 'ADD_MESSAGE', message: response.message });
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
        dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { path: state.historyViewOptions.path.slice(0, index + 1), files: [] } });
      }
    }
    else {
      dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { path: state.historyViewOptions.path.concat(node), files: [] } });
    }
    if (node.type === 'tree') {
      return git.listFiles(node.objectId)
        .then(response => {
          state = getState() as AppState;
          dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { files: response.data } });
          if (response.message) {
            dispatch({ type: 'ADD_MESSAGE', message: response.message });
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
    dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { commitHash: commit.hash, path: [root], files: [] } });
    state = getState();
    if (state.historyViewOptions.diffViewMode === DiffViewMode.Diff) {
      dispatch(loadDiff(commit));
    }
    else if (state.historyViewOptions.diffViewMode === DiffViewMode.Tree) {
      dispatch(loadNode(root));
    }
  };
}

export function selectDiffViewMode(mode: DiffViewMode) {
  return (dispatch, getState: () => AppState) => {
    dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { diffViewMode: mode } });
    let state = getState() as AppState;
    let opts = state.historyViewOptions;
    if (mode === DiffViewMode.Tree && opts.path.length < 2 && !opts.files.length) {
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

export function itemSelected(b) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_BASEDATA', data: b });
    if (b.mode === AppMode.LocalBranches || b.mode === AppMode.RemoteBranches || b.mode === AppMode.Tags) {
      dispatch(dispatch => git.getCommits(1000, b.selectedItem)
        .then((commits) => {
          if (commits.returnCode === 0) {
            dispatch({ type: 'SET_COMMITS', commits: commits.data });
            if (commits.data && commits.data.length) {
              dispatch(commitSelected(commits.data[0]));
            }
          }
          if (commits.message) {
            dispatch({ type: 'ADD_MESSAGE', message: commits.message });
          }
        }));
    }
  };
}

export function initState() {
  return (dispatch) => {
    return git.getDirName()
      .then(dirName => {
        if (dirName.returnCode === 0) {
          dispatch({
            type: 'UPDATE_BASEDATA',
            data: {
              dirName: dirName.data
            }
          });
          if (dirName.message) {
            dispatch({ type: 'ADD_MESSAGE', message: dirName.message });
          }
          dispatch((dispatch) => git.getViewOnly()
            .then(viewOnly => {
              dispatch({
                type: 'UPDATE_BASEDATA',
                data: {
                  viewOnly: viewOnly.data === "1"
                }
              });
              if (viewOnly.message) {
                dispatch({ type: 'ADD_MESSAGE', message: viewOnly.message });
              }
            }));

          dispatch((dispatch) => git.getLocalBranches()
            .then((branches: GitBrancesResponse) => {
              dispatch({
                type: 'SET_LOCAL_BRANCHES',
                data: branches.data
              });
              if (branches.message) {
                dispatch({ type: 'ADD_MESSAGE', message: branches.message });
              }
              return branches;
            })
            .then(branches => {
              if (branches.data) {
                let active: GitBranch = branches.data.find(b => b.status === BranchStatus.Current);
                if (active) {
                  dispatch(itemSelected({ selectedItem: active.name, mode: AppMode.LocalBranches }));
                }
                if (branches.message) {
                  dispatch({ type: 'ADD_MESSAGE', message: branches.message });
                }
              }
            }));

          dispatch((dispatch) => git.getRemoteBranches()
            .then((branches: GitBrancesResponse) => {
              dispatch({
                type: 'SET_REMOTE_BRANCHES',
                data: branches.data
              });
              if (branches.message) {
                dispatch({ type: 'ADD_MESSAGE', message: branches.message });
              }
            }));

          dispatch((dispatch) => git.getTags()
            .then((tags: GitBrancesResponse) => {
              dispatch({
                type: 'SET_TAGS_BRANCHES',
                data: tags.data
              });
              if (tags.message) {
                dispatch({ type: 'ADD_MESSAGE', message: tags.message });
              }
            }));
        }
      });
  };
}
