
import BranchStatus from './BranchStatus';

export interface GitBranch {
  name: string;
  status: BranchStatus;
}

export default GitBranch;
