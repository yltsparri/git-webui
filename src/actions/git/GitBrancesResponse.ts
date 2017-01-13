import GitBranch from './GitBranch';
interface GitBrancesResponse {
  data?: Array<GitBranch>;
  returnCode: number;
  message?: string;
}

export default GitBrancesResponse;
