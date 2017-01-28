import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appData} from './reducers/AppData';
import {diffOptions} from './reducers/DiffOptions';
import {getBranchDataReducer} from './reducers/Branches';
import {commits} from './reducers/Commits';
import {commitDiff} from './reducers/Diff';
import {commitTree} from './reducers/CommitTree';
import {offsets} from './reducers/Offsets';
import Navigation from './reducers/Navigation';
import Actions from './Actions';
import thunk from 'redux-thunk';

let reducer = combineReducers({
  appData: appData,
  diffOptions: diffOptions,
  localBranches: getBranchDataReducer(Actions.SET_LOCAL_BRANCHES),
  remoteBrances: getBranchDataReducer(Actions.SET_REMOTE_BRANCHES),
  tags: getBranchDataReducer(Actions.SET_TAGS),
  commits,
  offsets,
  commitDiff: commitDiff,
  commitTree: commitTree,
  navigation: Navigation
});

let store = createStore(reducer, applyMiddleware(
  thunk, // lets us dispatch() functions
));

export default store;
