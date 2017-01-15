export interface Diff {
  headerLines: Array<string>;
  fileDiffs: Array<FileDiff>;
}

export interface FileDiff {
  header: string;
  modeLine: string;
  initialFileLine: string;
  resultingFileLine: string;
  hunks: Array<Hunk>;
}

export enum HunkPartType {
  Keep = 0,
  Remove = 1,
  Add = 2
}

export interface HunkPart {
  content: Array<string>;
  type: HunkPartType;
}

export interface Hunk {
  header: string;
  parts: Array<HunkPart>;
}
