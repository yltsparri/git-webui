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

import GitBranch from './git/GitBranch';
import { CommitInfo } from '../actions/git/CommitInfo';
import { AppData, AppMode, SelectedItem, NavigationType, DiffOptions, Commits, CommitViewMode, CommitDiff, CommitTree } from '../actions/AppState';
import Actions from './Actions';
import { Hunk, HunkPart, HunkPartType, FileDiff } from './git/Diff';

export function diffOptionsReducer(state: DiffOptions, action): DiffOptions {
  switch (action.type) {
    case Actions.UPDATE_COMMIT_VIEW_DATA:
      return Object.assign({}, state, action.data);
    case Actions.TOGGLE_SHOW_FULL_FILE:
      return Object.assign({}, state, { fullFileDiff: !state.fullFile });
    case Actions.TOGGLE_IGNORE_WHITESPACE:
      return Object.assign({}, state, { ignoreWhitespace: !state.ignoreWhitespace });
  }
  return state || {
    ignoreWhitespace: false,
    context: 3,
    fullFile: false,
    options: null
  };
};

export function baseDataReducer(state: AppData, action): AppData {
  switch (action.type) {
    case Actions.UPDATE_BASEDATA:
      let item = action.data.selectedItem as SelectedItem;
      if (action.data.selectedItem) {
        let mode: AppMode;
        switch (item.type) {
          case NavigationType.Workspace:
            mode = AppMode.Workspace;
          case NavigationType.RemoteAccess:
            mode = AppMode.RemoteAccess;
          case NavigationType.LocalBranches:
          case NavigationType.RemoteBranches:
          case NavigationType.Tags:
            mode = AppMode.History;
        }
        return Object.assign({}, state, action.data, { mode });
      }
      return Object.assign({}, state, action.data);
    case Actions.ADD_MESSAGE:
      return Object.assign({}, state, { messages: (state.messages ? state.messages + '\n' : '') + action.message });
    case Actions.CLOSE_MESSAGE:
      return Object.assign({}, state, { messages: null });
    case Actions.UPDATE_COMMIT_VIEW_DATA:

  }
  return state || {
    dirName: '',
    viewOnly: true,
    selectedItem: { name: null, type: NavigationType.LocalBranches },
    mode: AppMode.History,
    messages: null
  };
};

export function getBranchDataReducer(key: string) {
  return (state: Array<GitBranch>, action): Array<GitBranch> => {
    switch (action.type) {
      case key:
        return action.data || [];
      default:
        return state || [];
    }
  };
};


const filter = (hunks: Array<Hunk>) => {
  const removedHunks = [];
  const addedHunks = [];
  hunks.forEach((hunk) => {
    const leftHunk = {
      header: hunk.header,
      parts: new Array<HunkPart>()
    };
    const rightHunk = {
      header: hunk.header,
      parts: new Array<HunkPart>()
    };
    removedHunks.push(leftHunk);
    addedHunks.push(rightHunk);

    for (let partIndex = 0; partIndex < hunk.parts.length; partIndex++) {
      const part = hunk.parts[partIndex];
      if (part.type === HunkPartType.Keep) {
        leftHunk.parts.push(part);
        rightHunk.parts.push(part);
      }
      else if (part.type === HunkPartType.Remove) {
        if (partIndex < hunk.parts.length - 1) {
          const next = hunk.parts[partIndex + 1];
          if (next.type === HunkPartType.Add) {
            partIndex++;
            leftHunk.parts.push(part);
            rightHunk.parts.push(next);
            if (next.content.length > part.content.length) {
              leftHunk.parts.push({
                type: null,
                content: new Array<string>(next.content.length - part.content.length)
              });
            }
            else if (next.content.length < part.content.length) {
              rightHunk.parts.push({
                type: null,
                content: new Array<string>(part.content.length - next.content.length)
              });
            }
          }
          else {
            leftHunk.parts.push(part);
            rightHunk.parts.push({
                type: null,
                content: new Array<string>(part.content.length)
              });
          }
        }
        else {
          rightHunk.parts.push({
            type: null,
            content: new Array<string>(part.content.length)
          });
        }
      }
      else if (part.type === HunkPartType.Add) {
        leftHunk.parts.push({
          type: null,
          content: new Array<string>(part.content.length)
        });
        rightHunk.parts.push(part);
      }
    }
  });
  return { removedHunks, addedHunks };
};

const getSplitDiff = (fileDiffs, selectedFile) => {
  const file = fileDiffs[selectedFile];
  var filtered = file && file.hunks ? filter(file.hunks) : { removedHunks: [], addedHunks: [] };
  let removedLinesDiff: FileDiff = {
    hunks: filtered.removedHunks,
    header: file.header,
    fileModeLine: file.newFileModeLine,
    indexLine: file.indexLine,
    initialFile: file.initialFile,
    resultingFile: file.resultingFile
  };
  let addedLinesDiff: FileDiff = {
    hunks: filtered.addedHunks,
    header: file.header,
    fileModeLine: file.newFileModeLine,
    indexLine: file.indexLine,
    initialFile: file.initialFile,
    resultingFile: file.resultingFile
  };
  return { removedLinesDiff, addedLinesDiff };
};

export function commitDiff(state: CommitDiff, action): CommitDiff {
  switch (action.type) {
    case Actions.UPDATE_COMMIT_DIFF_DATA:
      return Object.assign({}, state, action.data, getSplitDiff(action.data.fileDiffs, state.selectedFile));
    case Actions.SELECT_COMMIT_DIFF_FILE:
      return Object.assign({}, state, { selectedFile: action.selectedFile },
        getSplitDiff(state.fileDiffs, action.selectedFile));
  }
  return state || {
    fileDiffs: new Array<FileDiff>(),
    selectedFile: 0,
    headerLines: new Array<string>(),
    removedLinesDiff: null,
    addedLinesDiff: null
  };
}

export function commitTree(state: CommitTree, action): CommitTree {
  switch (action.type) {
    case Actions.UPDATE_BASEDATA:
      if (action.data.dirName) {
        let root;
        if (state.path.length) {
          root = Object.assign({}, state.path[0], { name: action.data.dirName });
        }
        else {
          root = {
            name: action.data.dirName,
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
export function commitsReducer(state: Commits, action): Commits {
  switch (action.type) {
    case 'SET_COMMITS':
      const commits = action.commits as Array<CommitInfo> || [];
      return Object.assign({}, state, {
        commits: commits,
        selectedCommit: commits.length > 0 ? commits[commits.length - 1].hash : null
      });
    case Actions.SELECT_COMMIT:
      return Object.assign({}, state, {
        selectedCommit: action.selectedCommit
      });
    case Actions.SELECT_COMMIT_VIEW_MODE:
      return Object.assign({}, state, {
        viewMode: action.viewMode
      });
    default:
      return state || {
        commits: new Array<CommitInfo>(),
        selectedCommit: null,
        viewMode: CommitViewMode.Diff
      };
  }
};
