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
import {CommitDiff, Commits, CommitTree, CommitViewMode, DiffOptions} from './Commit';

export { Diff, FileInfo, CommitInfo, GitBranch, CommitDiff, Commits, CommitTree, CommitViewMode, DiffOptions };

export enum AppMode {
  Workspace = 0,
  RemoteAccess = 1,
  History = 2,
  Explore = 3
}

export enum NavigationType {
  Workspace = 0,
  RemoteAccess = 1,
  LocalBranches = 2,
  RemoteBranches = 3,
  Tags = 4
}

export interface SelectedItem {
  name: string;
  type: NavigationType;
}

export interface AppData {
  dirName: string;
  viewOnly: boolean;
  mode: AppMode;
  selectedItem: SelectedItem;
  messages: string;
}

export interface Offset {
  top: number;
  left; number;
}

export interface AppState {
  baseData: AppData;
  localBranches: Array<GitBranch>;
  remoteBrances: Array<GitBranch>;
  tags: Array<GitBranch>;
  commitDiff: CommitDiff;
  commits: Commits;
  commitTree: CommitTree;
  diffOptions: DiffOptions;
  offsets: Map<string, Offset>;
}
