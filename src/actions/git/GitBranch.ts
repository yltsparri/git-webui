import { BranchStatus } from "./BranchStatus";

export interface GitBranch {
  name: string;
  status: BranchStatus;
}
