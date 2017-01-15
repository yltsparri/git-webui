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
import FileInfo from './git/FileInfo';
import { Diff } from './git/Diff';

export { Diff, FileInfo, CommitInfo, GitBranch };

export enum DiffViewMode {
  Diff = 0,
  Tree = 1,
  Explore = 2
}

export interface HistoryViewOptions {
  commitHash: string;
  diff: Diff;
  ignoreWhitespace: boolean;
  diffContext: number;
  fullFileDiff: boolean;
  gitDiffOpts?: Array<string>;
  gitFile?: string;
  diffViewMode: DiffViewMode;
  path: Array<FileInfo>;
  files: Array<FileInfo>;
}

export enum AppMode {
  Workspace = 0,
  RemoteAccess = 1,
  LocalBranches = 2,
  RemoteBranches = 3,
  Tags = 4
}

export interface BaseData {
  dirName: string;
  viewOnly: boolean;
  mode: AppMode;
  selectedItem: string;
  messages: string;
}

export interface AppState {
  baseData: BaseData;
  localBranches: Array<GitBranch>;
  remoteBrances: Array<GitBranch>;
  tags: Array<GitBranch>;
  commits: Array<CommitInfo>;
  historyViewOptions: HistoryViewOptions;
}
