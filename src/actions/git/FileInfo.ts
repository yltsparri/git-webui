export interface FileInfo {
  mode: number;
  objectId: string;
  size: number;
  isSymbolicLink: boolean;
  type: string;
  name: string;
  parent: string;
}

export default FileInfo;
