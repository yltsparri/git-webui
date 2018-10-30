import { BranchStatus } from "./BranchStatus";
import { GitBrancesResponse } from "./GitBrancesResponse";
import { GitBranch } from "./GitBranch";
import { GitResponse } from "./GitResponse";

class GitBranchesResponseParser {
  public parse = (response: GitResponse<string>): GitBrancesResponse => {
    if (response.returnCode !== 0) {
      throw {
        message: response.message,
        returnCode: response.returnCode
      };
    }

    let branches: GitBranch[] = this.splitLines(response.data!).map(name =>
      this.getGitBranch(name)
    );
    branches = branches.sort(this.compareBranches);
    return {
      data: branches,
      message: response.message,
      returnCode: response.returnCode
    };
  }
  private getGitBranch = (name: string): GitBranch => {
    let status = BranchStatus.Normal;
    if (name[2] === "(" && name[name.length - 1] === ")") {
      // This is a '(detached from XXXXXX)'
      // tslint:disable-next-line:no-bitwise
      status |= BranchStatus.Detached;
      name = name.substring(name.lastIndexOf(" ") + 1, name.length - 1);
    }
    const arrowIndex = name.lastIndexOf(" -> ");
    if (arrowIndex > 0) {
      name = name.substring(2, arrowIndex);
    }
    if (name[0] === "*") {
      name = name.substring(2);
      // tslint:disable-next-line:no-bitwise
      status |= BranchStatus.Current;
    }
    return {
      name,
      status
    };
  }

  private compareBranches = (a: GitBranch, b: GitBranch) => {
    if (a.name[0] === "*") {
      return -1;
    } else if (b.name[0] === "*") {
      return 1;
    } else {
      return -a.name.localeCompare(b.name);
    }
  }
  private splitLines = (data: string) => {
    return data.split("\n").filter(s => {
      return s.length > 0;
    });
  }
}

export default new GitBranchesResponseParser();
