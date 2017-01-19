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

import GitBranch from '../git/GitBranch';
import GitBrancesResponse from '../git/GitBrancesResponse';
import BranchStatus from '../git/BranchStatus';
import Git from '../git/Git';
import Message from './Messages';
import { NavigationType } from '../AppState';
import Actions from '../Actions';
import { itemSelected } from './Navigation';

const setDirName = (dirName: string) => {
  return {
    type: Actions.SET_DIRNAME,
    dirName
  };
};

const setViewOnly = (viewOnly: boolean) => {
  return {
    type: Actions.SET_VIEW_ONLY,
    viewOnly
  };
};

const getViewOnly = (dispatch) =>
  Git.getViewOnly()
    .then(response => {
      dispatch(setViewOnly(response.data === "1"));
      if (response.message) {
        dispatch(Message.addMessage(response.message));
      }
    });

const setLocalBranches = (branches) => {
  return {
    type: Actions.SET_LOCAL_BRANCHES,
    data: branches
  };
};

const selectActiveBranch = (branches: Array<GitBranch>) => {
  let active: GitBranch = branches.find(b => b.status === BranchStatus.Current);
  return active ?
    itemSelected({ name: active.name, type: NavigationType.LocalBranches }) :
    null;

};

const getLocalBranches = (dispatch) =>
  Git.getLocalBranches()
    .then((response: GitBrancesResponse) => {
      dispatch(setLocalBranches(response.data));
      if (response.message) {
        dispatch(Message.addMessage(response.message));
      }
      let action = selectActiveBranch(response.data);
      if (action) {
        dispatch(action);
      }
    }).catch((error) => {
      console.log(error);
      dispatch(Message.addMessage(error.message));
    });

const setRemoteBranches = (branches: Array<GitBranch>) => {
  return {
    type: Actions.SET_REMOTE_BRANCHES,
    data: branches
  };
};

const getRemoteBranches = (dispatch) => {
  return Git.getRemoteBranches()
    .then((response: GitBrancesResponse) => {
      dispatch(setRemoteBranches(response.data));
      if (response.message) {
        dispatch(Message.addMessage(response.message));
      }
    }).catch((error) => {
      console.log(error);
      dispatch(Message.addMessage(error.message));
    });
};


const setTags = (tags: Array<GitBranch>) => {
  return {
    type: Actions.SET_REMOTE_BRANCHES,
    data: tags
  };
};

const getTags = (dispatch) => {
  return Git.getRemoteBranches()
    .then((response: GitBrancesResponse) => {
      dispatch(setTags(response.data));
      if (response.message) {
        dispatch(Message.addMessage(response.message));
      }
    }).catch((error) => {
      console.log(error);
      dispatch(Message.addMessage(error.message));
    });
};

export function initState() {
  return (dispatch) => {
    return Git.getDirName()
      .then(response => {
        if (response.returnCode === 0) {
          dispatch(setDirName(response.data));
          dispatch(getViewOnly);
          dispatch(getLocalBranches);
          dispatch(getRemoteBranches);
          dispatch(getTags);
        }
        if (response.message) {
          dispatch(Message.addMessage(response.message));
        }
      });
  };
}

export default {
  initState
};
