export interface Diff {
  headerLines: string[];
  fileDiffs: FileDiff[];
}

export interface FileDiff {
  header: string;
  fileModeLine: string;
  indexLine: string;
  initialFile: string;
  resultingFile: string;
  hunks: Hunk[];
}

export enum HunkPartType {
  Keep = 0,
  Remove = 1,
  Add = 2
}

export interface HunkPart {
  content: string[];
  type: HunkPartType | null;
}

export interface Hunk {
  header: string;
  parts: HunkPart[];
}

export default Diff;
