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

  removedLinesDiff: FileDiff;
  addedLinesDiff: FileDiff;
}

export interface Commits {
  commits: Array<CommitInfo>;
  selectedCommit: string;
  viewMode: CommitViewMode;
}

export default CommitDiff;
