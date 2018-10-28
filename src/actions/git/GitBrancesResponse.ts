import GitBranch from "./GitBranch";
interface GitBrancesResponse {
  data?: GitBranch[];
  returnCode: number;
  message?: string;
}

export default GitBrancesResponse;
