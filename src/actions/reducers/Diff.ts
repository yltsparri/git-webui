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

import { CommitDiff } from '../AppState';
import Actions from '../Actions';
import { Hunk, HunkPart, HunkPartType, FileDiff } from '../git/Diff';
import { CommitViewMode } from '../Commit';

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
  if (selectedFile === null || !fileDiffs[selectedFile]) {
    return { removedLinesDiff: null, addedLinesDiff: null };
  }
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
      let splitDiff = getSplitDiff(action.data.fileDiffs, state.selectedFile || 0);
      return Object.assign({}, state, action.data, splitDiff, { selectedFile: action.selectedFile || 0 });
    case Actions.SELECT_COMMIT:
      return Object.assign({}, state, {
        selectedFile: null,
        removedLinesDiff: null,
        addedLinesDiff: null
      });
    case Actions.SELECT_COMMIT_VIEW_MODE:
      return Object.assign({}, state, { useSplitDiff: action.mode === CommitViewMode.SidebySideDiff });
    case Actions.SELECT_COMMIT_DIFF_FILE:
      return Object.assign({}, state, { selectedFile: action.selectedFile },
        getSplitDiff(state.fileDiffs, action.selectedFile));
  }
  return state || {
    fileDiffs: new Array<FileDiff>(),
    selectedFile: 0,
    headerLines: new Array<string>(),
    removedLinesDiff: null,
    addedLinesDiff: null,
    useSplitDiff: false
  };
}