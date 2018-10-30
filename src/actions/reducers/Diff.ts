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

import { AnyAction } from "redux";
import Actions from "../Actions";
import { CommitDiff } from "../AppState";
import { CommitViewMode } from "../Commit";
import { FileDiff, Hunk, HunkPart, HunkPartType } from "../git/Diff";

const filter = (hunks: Hunk[]) => {
  const removedHunks = new Array<Hunk>();
  const addedHunks = new Array<Hunk>();
  hunks.forEach(hunk => {
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
      } else if (part.type === HunkPartType.Remove) {
        if (partIndex < hunk.parts.length - 1) {
          const next = hunk.parts[partIndex + 1];
          if (next.type === HunkPartType.Add) {
            partIndex++;
            leftHunk.parts.push(part);
            rightHunk.parts.push(next);
            if (next.content.length > part.content.length) {
              leftHunk.parts.push({
                type: null,
                content: new Array<string>(
                  next.content.length - part.content.length + 1
                )
              });
            } else if (next.content.length < part.content.length) {
              rightHunk.parts.push({
                type: null,
                content: new Array<string>(
                  part.content.length - next.content.length + 1
                )
              });
            }
          } else {
            leftHunk.parts.push(part);
            rightHunk.parts.push({
              type: null,
              content: new Array<string>(part.content.length + 1)
            });
          }
        } else {
          rightHunk.parts.push({
            type: null,
            content: new Array<string>(part.content.length + 1)
          });
        }
      } else if (part.type === HunkPartType.Add) {
        leftHunk.parts.push({
          type: null,
          content: new Array<string>(part.content.length + 1)
        });
        rightHunk.parts.push(part);
      }
    }
  });
  return { removedHunks, addedHunks };
};

const getSplitDiff = (fileDiffs: FileDiff[], selectedFile?: number) => {
  if (selectedFile === undefined || !fileDiffs[selectedFile]) {
    return { removedLinesDiff: undefined, addedLinesDiff: undefined };
  }
  const file = fileDiffs[selectedFile];
  const filtered =
    file && file.hunks
      ? filter(file.hunks)
      : { removedHunks: [], addedHunks: [] };
  const removedLinesDiff: FileDiff = {
    hunks: filtered.removedHunks,
    header: file.header,
    fileModeLine: file.fileModeLine,
    indexLine: file.indexLine,
    initialFile: file.initialFile,
    resultingFile: file.resultingFile
  };
  const addedLinesDiff: FileDiff = {
    hunks: filtered.addedHunks,
    header: file.header,
    fileModeLine: file.fileModeLine,
    indexLine: file.indexLine,
    initialFile: file.initialFile,
    resultingFile: file.resultingFile
  };
  return { removedLinesDiff, addedLinesDiff };
};

export function commitDiff(state: CommitDiff, action: AnyAction): CommitDiff {
  switch (action.type) {
    case Actions.UPDATE_COMMIT_DIFF_DATA:
      const splitDiff = getSplitDiff(
        action.data.fileDiffs,
        state.selectedFile || 0
      );
      return {
        ...state,
        ...action.data,
        ...splitDiff,
        selectedFile: action.selectedFile || 0
      };
    case Actions.SELECT_COMMIT:
      return {
        ...state,
        selectedFile: undefined,
        removedLinesDiff: undefined,
        addedLinesDiff: undefined
      };
    case Actions.SELECT_COMMIT_VIEW_MODE:
      return {
        ...state,
        useSplitDiff: action.mode === CommitViewMode.SidebySideDiff
      };
    case Actions.SELECT_COMMIT_DIFF_FILE:
      return {
        ...state,
        selectedFile: action.selectedFile as number,
        ...getSplitDiff(state.fileDiffs, action.selectedFile)
      };
  }
  return (
    state || {
      fileDiffs: new Array<FileDiff>(),
      selectedFile: 0,
      headerLines: new Array<string>(),
      removedLinesDiff: null,
      addedLinesDiff: null,
      useSplitDiff: false
    }
  );
}
