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
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import Actions from "../Actions";
import { NavigationType } from "../AppState";
import { BranchStatus } from "../git/BranchStatus";
import Git from "../git/Git";
import { GitBrancesResponse } from "../git/GitBrancesResponse";
import { GitBranch } from "../git/GitBranch";
import { addMessage } from "./Messages";
import { itemSelected } from "./Navigation";

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

const getViewOnly = (dispatch: ThunkDispatch<{}, {}, Action>) =>
  Git.getViewOnly().then(response => {
    dispatch(setViewOnly(response.data === "1"));
    if (response.message) {
      dispatch(addMessage(response.message));
    }
  });

const setLocalBranches = (branches: GitBranch[]) => {
  return {
    type: Actions.SET_LOCAL_BRANCHES,
    data: branches
  };
};

const selectActiveBranch = (branches: GitBranch[]) => {
  let active = branches.find(b => b.status === BranchStatus.Current);
  if (!active) {
    active = branches[0];
  }
  return active
    ? itemSelected(NavigationType.LocalBranches + "_" + active.name)
    : null;
};

const getLocalBranches = (dispatch: ThunkDispatch<{}, {}, Action>) =>
  Git.getLocalBranches()
    .then((response: GitBrancesResponse) => {
      if (response.data) {
        dispatch(setLocalBranches(response.data));
        if (response.message) {
          dispatch(addMessage(response.message));
        }
        const action = selectActiveBranch(response.data);
        if (action) {
          dispatch(action);
        }
      }
    })
    .catch(error => {
      dispatch(addMessage(error.message));
    });

const setRemoteBranches = (branches: GitBranch[]) => {
  return {
    type: Actions.SET_REMOTE_BRANCHES,
    data: branches
  };
};

const getRemoteBranches = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return Git.getRemoteBranches()
    .then((response: GitBrancesResponse) => {
      if (response.data) {
        dispatch(setRemoteBranches(response.data));
      }
      if (response.message) {
        dispatch(addMessage(response.message));
      }
    })
    .catch(error => {
      dispatch(addMessage(error.message));
    });
};

const setTags = (tags: GitBranch[]) => {
  return {
    type: Actions.SET_TAGS,
    data: tags
  };
};

const getTags = (dispatch: ThunkDispatch<{}, {}, Action>) => {
  return Git.getTags()
    .then((response: GitBrancesResponse) => {
      if (response.data) {
        dispatch(setTags(response.data));
      }
      if (response.message) {
        dispatch(addMessage(response.message));
      }
    })
    .catch(error => {
      dispatch(addMessage(error.message));
    });
};

export function initState(): ThunkAction<Promise<void>, {}, {}, Action> &
  Action {
  const action = (dispatch: ThunkDispatch<{}, {}, Action>) => {
    return Git.getDirName().then(response => {
      if (response.returnCode === 0) {
        if (response.data) {
          dispatch(setDirName(response.data));
        }
        dispatch(getViewOnly);
        dispatch(getLocalBranches);
        dispatch(getRemoteBranches);
        dispatch(getTags);
      }
      if (response.message) {
        dispatch(addMessage(response.message));
      }
    });
  };
  action.type = "thunk";
  return action;
}
