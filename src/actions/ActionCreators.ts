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
import { GitBranch, GitBrancesResponse, BranchStatus } from './git/Git';
import Git from './git/Git';
import { AppMode, AppState } from './AppState';

const git = new Git();
const loadDiff = (commit: CommitInfo) => {
  return (dispatch, getState) => {
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

export function commitSelected(commit: CommitInfo) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { commitHash: commit.hash } });
    dispatch(loadDiff(commit));
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
