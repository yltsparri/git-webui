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

import { CommitInfo } from "../actions/git/CommitInfo";
import {
  CommitDiff,
  Commits,
  CommitTree,
  CommitViewMode,
  DiffOptions
} from "./Commit";
import { Diff } from "./git/Diff";
import { FileInfo } from "./git/FileInfo";
import { GitBranch } from "./git/GitBranch";

export {
  Diff,
  FileInfo,
  CommitInfo,
  GitBranch,
  CommitDiff,
  Commits,
  CommitTree,
  CommitViewMode,
  DiffOptions
};

export enum AppMode {
  Workspace = 0,
  RemoteAccess = 1,
  History = 2,
  Explore = 3
}

export class NavigationType {
  public static readonly Workspace = "workspace";
  public static readonly RemoteAccess = "remote-access";
  public static readonly LocalBranches = "local-branches";
  public static readonly RemoteBranches = "remote-branches";
  public static readonly Tags = "tags";
}

export interface AppData {
  dirName: string;
  viewOnly: boolean;
  mode: AppMode;
  messages: string;
  showAll: string;
}

export interface Offset {
  top: number;
  left: number;
}

export interface NavigationNode {
  id: string;
  text: string;
  parentId: string;
  children: string[];
  props: { [key: string]: any };
}

export interface Navigation {
  rootNodes: string[];
  nodes: { [id: string]: NavigationNode };
  showAll?: string;
  selected: string;
}

export interface AppState {
  appData: AppData;
  navigation: Navigation;
  commitDiff: CommitDiff;
  commits: Commits;
  commitTree: CommitTree;
  diffOptions: DiffOptions;
  offsets: { [key: string]: Offset };
}
