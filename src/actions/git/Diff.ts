export interface Diff {
  headerLines: Array<string>;
  fileDiffs: Array<FileDiff>;
}

export interface FileDiff {
  header: string;
  newFileModeLine: string;
  indexLine: string;
  initialFile: string;
  resultingFile: string;
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

export default Diff;
