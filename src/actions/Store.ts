import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import Actions from "./Actions";
import { appData } from "./reducers/AppData";
import { getBranchDataReducer } from "./reducers/Branches";
import { commits } from "./reducers/Commits";
import { commitTree } from "./reducers/CommitTree";
import { commitDiff } from "./reducers/Diff";
import { diffOptions } from "./reducers/DiffOptions";
import { Navigation } from "./reducers/Navigation";
import { offsets } from "./reducers/Offsets";

const reducer = combineReducers({
  appData,
  diffOptions,
  localBranches: getBranchDataReducer(Actions.SET_LOCAL_BRANCHES),
  remoteBrances: getBranchDataReducer(Actions.SET_REMOTE_BRANCHES),
  tags: getBranchDataReducer(Actions.SET_TAGS),
  commits,
  offsets,
  commitDiff,
  commitTree,
  navigation: Navigation
});

export const store = createStore(
  reducer,
  applyMiddleware(
    thunk // lets us dispatch() functions
  )
);
