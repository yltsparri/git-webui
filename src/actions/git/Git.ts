/*
 * Copyright 2017 Ülo Parri
 * Copyright 2015 Eric ALBER
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CommitInfo, Person, Ref, RefType } from './CommitInfo';

export interface GitResponse<T> {
  data?: T;
  returnCode: number;
  message?: string;
}

export enum BranchStatus {
  Normal = 0,
  Detached = 1,
  Current = 2,
}

export interface GitBranch {
  name: string;
  status: BranchStatus;
}
export interface GitBrancesResponse {
  data?: Array<GitBranch>;
  returnCode: number;
  message?: string;
}

export default class Git {

  getViewOnly = (): Promise<GitResponse<string>> => {
    var myInit = {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'text/plain' }),
    };

    var myRequest = new Request('viewonly', myInit);
    return fetch(myRequest)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        }
        throw Error(response.statusText);
      })
      .then((text: string) => { return { data: text, message: null, returnCode: 0 }; })
      .catch((error) => {
        console.log(error);
        return {
          data: '',
          returnCode: error.code,
          message: error.message
        };
      });
  }

  getDirName = (): Promise<GitResponse<string>> => {

    var myRequest = new Request('dirname', {
      method: 'GET',
      headers: new Headers({ 'Content-Type': 'text/plain' }),
    });

    return fetch(myRequest)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        }
        throw Error(response.statusText);
      })
      .then((text: string) => { return { data: text, message: null, returnCode: 0 }; })
      .catch((error) => {
        console.log(error);
        return {
          data: '',
          returnCode: error.code,
          message: error.message
        };
      });;
  }

  getLocalBranches = (): Promise<GitBrancesResponse> => {
    let handler = (d: GitResponse<string>): GitBrancesResponse => {
      if (d.returnCode !== 0) {
        return {
          data: undefined,
          message: d.message,
          returnCode: d.returnCode
        };
      }
      let branches: Array<GitBranch> = this.splitLines(d.data)
        .map(name => this.getGitBranch(name));
      branches = branches.sort(this.compareBrances);
      return {
        data: branches,
        message: d.message,
        returnCode: d.returnCode
      };
    };
    return this.runGit('branch', null).then((d) => handler(d));
  }

  getRemoteBranches = (): Promise<GitBrancesResponse> => {
    let handler = (d: GitResponse<string>): GitBrancesResponse => {
      if (d.returnCode !== 0) {
        return {
          data: undefined,
          message: d.message,
          returnCode: d.returnCode
        };
      }
      let branches: Array<GitBranch> = this.splitLines(d.data)
        .map(name => this.getGitBranch(name));
      branches = branches.sort(this.compareBrances);
      return {
        data: branches,
        message: d.message,
        returnCode: d.returnCode
      };
    };
    return this.runGit('branch --remotes', null).then((d) => handler(d));
  }

  getTags = (): Promise<GitBrancesResponse> => {
    let handler = (d: GitResponse<string>): GitBrancesResponse => {
      if (d.returnCode !== 0) {
        return {
          data: undefined,
          message: d.message,
          returnCode: d.returnCode
        };
      }
      let branches: Array<GitBranch> = this.splitLines(d.data)
        .map(name => this.getGitBranch(name));
      branches = branches.sort((t1, t2) => -t1.name.localeCompare(t2.name));
      return {
        data: branches,
        message: d.message,
        returnCode: d.returnCode
      };
    };
    return this.runGit('tag', null).then(d => handler(d));
  }

  getCommits = (rows: number, from: string): Promise<GitResponse<Array<CommitInfo>>> => {
    const command: string = "log --date-order --pretty=raw --decorate=full --max-count=" + (rows + 1) + " " + from + " --";

    let parseRef = (data: string): Ref => {

      if (data.indexOf("refs/remotes") === 0) {
        return { text: data.substr(13), type: RefType.Remote };
      } else if (data.indexOf("refs/heads") === 0) {
        return { text: data.substr(11), type: RefType.Head };
      } else if (data.indexOf("tag: refs/tags") === 0) {
        return { text: data.substr(15), type: RefType.Tag };
      } else {
        return { text: data, type: RefType.Unspecified };
      }
    };

    let parsePerson = (data: string): Person => {
      const nameEnd = data.indexOf("<");
      const name = data.substr(0, nameEnd - 1);
      const emailEnd = data.indexOf(">", nameEnd);
      const email = data.substr(nameEnd + 1, emailEnd - nameEnd - 1);
      const dateEnd = data.indexOf(" ", emailEnd + 2);
      const secs = data.substr(emailEnd + 2, dateEnd - emailEnd - 2);
      const date = new Date(0);
      date.setUTCSeconds(parseInt(secs));
      return {
        name: name,
        email: email,
        date: date
      };
    };

    let parseCommit = (data: string): CommitInfo => {
      let commit: string;
      let refs: Array<Ref> = [];
      let parents: Array<string> = [];
      let tree: string;
      let author: Person;
      let committer: Person;
      let message: string;
      data.split("\n").forEach(function (line) {
        if (line.indexOf("commit ") === 0) {
          commit = line.substr(7, 40);
          if (line.length > 47) {
            var s = line.lastIndexOf("(") + 1;
            var e = line.lastIndexOf(")");
            refs = line.substr(s, e - s).split(", ").map((ref) => parseRef(ref));
          }
        } else if (line.indexOf("parent ") === 0) {
          parents.push(line.substr(7));
        } else if (line.indexOf("tree ") === 0) {
          tree = line.substr(5);
        } else if (line.indexOf("author ") === 0) {
          author = parsePerson(line.substr(7));
        } else if (line.indexOf("committer ") === 0) {
          committer = parsePerson(line.substr(10));
        } else if (line.indexOf("    ") === 0) {
          message = line.substr(4) + "\n";
        }
      });
      return {
        hash: commit,
        parents: parents,
        tree: tree,
        author: author,
        committer: committer,
        message: message,
        refs: refs
      };
    };

    return this.runGit(command, null)
      .then((response: GitResponse<string>) => {
        if (response.returnCode !== 0) {
          return { data: undefined, message: response.message, returnCode: response.returnCode };
        }
        var start = 0;
        var count = 0;
        let commits: Array<CommitInfo> = [];
        const data = response.data;
        let next: string;
        while (true) {
          var end = data.indexOf("\ncommit ", start);
          if (end !== -1) {
            let commit = parseCommit(data.substr(start, end - start));
            if (commits.length < rows) {
              commits.push(commit);
            }
            else {
              next = commit.hash;
            }
          }
          else {
            commits.push(parseCommit(data.substr(start)));
            break;
          }
          start = end + 1;
          ++count;
        }
        return { data: commits, message: null, returnCode: 0 };
      });
  }

  getDiff = (commit: string,
    diffContext: number,
    ignoreWhitespace: boolean,
    gitDiffOpts?: Array<string>,
    gitFile?: string): Promise<GitResponse<string>> => {
    var fullCmd = 'show ';
    if (diffContext) {
      fullCmd += " --unified=" + diffContext.toString();
    }
    if (ignoreWhitespace) {
      fullCmd += " --ignore-all-space --ignore-blank-lines";
    }
    if (gitDiffOpts) {
      fullCmd += " " + gitDiffOpts.join(" ");
    }
    if (gitFile) {
      fullCmd += " -- " + gitFile;
    }
    return this.runGit('show ' + commit + ' -- ', null);
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

  private compareBrances = (a: GitBranch, b: GitBranch) => {
    if (a.name[0] === "*") {
      return -1;
    } else if (b.name[0] === "*") {
      return 1;
    } else {
      return a.name.localeCompare(b.name);
    }

  }
  private runGit = (cmd: string, arg1: string): Promise<GitResponse<string>> => {
    // cmd = git command line arguments
    // other arguments = optional stdin content and a callback function:
    // ex:
    // git("log", mycallback)
    // git("commit -F -", "my commit message", mycallback)
    // Convention : first line = git arguments, rest = process stdin
    cmd += "\n" + arg1;
    var myRequest = new Request('git', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'text/plain' }),
      body: cmd
    });

    return fetch(myRequest)
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        }
        throw Error(response.statusText);
      })
      .then((data) => {
        var footers = {};
        var fIndex = data.length;
        while (true) {
          var oldFIndex = fIndex;
          var fIndex = data.lastIndexOf("\r\n", fIndex - 1);
          var line = data.substring(fIndex + 2, oldFIndex);
          if (line.length > 0) {
            var footer = line.split(": ");
            footers[footer[0]] = footer[1];
          } else {
            break;
          }
        }

        var messageStartIndex = fIndex - parseInt(footers["Git-Stderr-Length"]);
        var message = data.substring(messageStartIndex, fIndex);
        var output = data.substring(0, messageStartIndex);
        var rcode = parseInt(footers["Git-Return-Code"]);
        if (rcode === 0) {
          return {
            data: output,
            returnCode: rcode,
            message: message
          };
        }
        else {
          throw Error(message);
        }
      })
      .catch((error) => {
        console.log(error);
        return {
          data: undefined,
          returnCode: error.code,
          message: error.message
        };
      });
  }

  private splitLines = (data) => {
    return data.split("\n").filter(function (s) { return s.length > 0; });
  }
}
