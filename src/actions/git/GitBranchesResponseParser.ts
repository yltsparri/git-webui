import BranchStatus from './BranchStatus';
import GitBranch from './GitBranch';
import GitResponse from './GitResponse';
import GitBrancesResponse from './GitBrancesResponse';
class GitBranchesResponseParser {
  parse = (response: GitResponse<string>): GitBrancesResponse => {
    if (response.returnCode !== 0) {
      throw {
        message: response.message,
        returnCode: response.returnCode
      };
    }

    let branches: Array<GitBranch> = this.splitLines(response.data)
      .map(name => this.getGitBranch(name));
    branches = branches.sort(this.compareBranches);
    return {
      data: branches,
      message: response.message,
      returnCode: response.returnCode
    };
  }
  private getGitBranch = (name: string): GitBranch => {
    let status = BranchStatus.Normal;
    if (name[2] === '(' && name[name.length - 1] === ')') {
      // This is a '(detached from XXXXXX)'
      status |= BranchStatus.Detached;
      name = name.substring(name.lastIndexOf(' ') + 1, name.length - 1);
    }
    var arrowIndex = name.lastIndexOf(" -> ");
    if (arrowIndex > 0) {
      name = name.substring(2, arrowIndex);
    }
    if (name[0] === '*') {
      name = name.substring(2);
      status |= BranchStatus.Current;
    }
    return {
      name: name,
      status: status
    };
  }

  private compareBranches = (a: GitBranch, b: GitBranch) => {
    if (a.name[0] === "*") {
      return -1;
    } else if (b.name[0] === "*") {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }

  }
  private splitLines = (data) => {
    return data.split("\n").filter(function (s) { return s.length > 0; });
  }

}

export default new GitBranchesResponseParser();
