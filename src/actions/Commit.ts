import { CommitInfo } from "./git/CommitInfo";
import { FileDiff } from "./git/Diff";
import { FileInfo } from "./git/FileInfo";

export enum CommitViewMode {
  Diff = 0,
  SidebySideDiff = 1,
  Tree = 2
}

export interface DiffOptions {
  ignoreWhitespace: boolean;
  context: number;
  fullFile: boolean;
  options?: string[];
}

export interface CommitTree {
  path: FileInfo[];
  files: FileInfo[];
}

export interface CommitDiff {
  fileDiffs: FileDiff[];
  selectedFile: number;
  headerLines: string[];
  useSplitDiff: boolean;
  removedLinesDiff: FileDiff;
  addedLinesDiff: FileDiff;
}

export interface Path {
  key: string;
  sha1?: string;
  commands: Array<{ type: string; x: number; y: number }>;
}

export interface Graph {
  paths: Path[];
  circles: Circle[];
}

export interface Circle {
  cx: number;
  cy: number;
  r: number;
  key: string;
}

export interface Commits {
  commits: CommitInfo[];
  selectedCommit: string;
  viewMode: CommitViewMode;
  graph: Graph;
}
