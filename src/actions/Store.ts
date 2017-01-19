import {applyMiddleware, combineReducers, createStore} from 'redux';
import {baseData} from './reducers/BaseData';
import {diffOptions} from './reducers/DiffOptions';
import {getBranchDataReducer} from './reducers/Branches';
import {commits} from './reducers/Commits';
import {commitDiff} from './reducers/Diff';
import {commitTree} from './reducers/CommitTree';
import {offsets} from './reducers/Offsets';
import Actions from './Actions';
import thunk from 'redux-thunk';

let reducer = combineReducers({
  baseData: baseData,
  diffOptions: diffOptions,
  localBranches: getBranchDataReducer(Actions.SET_LOCAL_BRANCHES),
  remoteBrances: getBranchDataReducer(Actions.SET_REMOTE_BRANCHES),
  tags: getBranchDataReducer(Actions.SET_TAGS_BRANCHES),
  commits,
  offsets,
  commitDiff: commitDiff,
  commitTree: commitTree,
});

let store = createStore(reducer, applyMiddleware(
  thunk, // lets us dispatch() functions
));

export default store;
