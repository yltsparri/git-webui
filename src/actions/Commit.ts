import { FileDiff } from './git/Diff';
import FileInfo from './git/FileInfo';
import CommitInfo from './git/CommitInfo';

export enum CommitViewMode {
  Diff = 0,
  SidebySideDiff = 1,
  Tree = 2
}

export interface DiffOptions {
  ignoreWhitespace: boolean;
  context: number;
  fullFile: boolean;
  options?: Array<string>;
}

export interface CommitTree {
  path: Array<FileInfo>;
  files: Array<FileInfo>;
}

export interface CommitDiff {
  fileDiffs: Array<FileDiff>;
  selectedFile: number;
  headerLines: Array<string>;
  useSplitDiff: boolean;
  removedLinesDiff: FileDiff;
  addedLinesDiff: FileDiff;
}

export interface Path {
  key: string;
  commands: Array<{ type: string, x: number, y: number }>;
}

export interface Graph {
   paths: Array<Path>;
   circles: Array<Circle>;
}

export interface Circle {
  cx: number;
  cy: number;
  r: number;
  key: string;
}

export interface Commits {
  commits: Array<CommitInfo>;
  selectedCommit: string;
  viewMode: CommitViewMode;
  graph: Graph;
}

export default Commits;
