import { GitBranch } from "./GitBranch";

export interface GitBrancesResponse {
  data?: GitBranch[];
  returnCode: number;
  message?: string;
}
