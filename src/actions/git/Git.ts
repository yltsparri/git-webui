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

import { CommitInfo } from "./CommitInfo";
import CommitInfoResponseParser from "./CommitInfoResponseParser";
import { Diff } from "./Diff";
import DiffParser from "./DiffParser";
import { FileInfo } from "./FileInfo";
import { GitBrancesResponse } from "./GitBrancesResponse";
import GitBranchesResponseParser from "./GitBranchesResponseParser";
import { GitResponse } from "./GitResponse";

export class Git {
  public getViewOnly = (): Promise<GitResponse<string>> => {
    return this.makeRequest("GET", "/git/viewonly", null, {
      "Content-Type": "text/plain"
    })
      .then((text: string) => {
        return { data: text, returnCode: 0 };
      })
      .catch(error => {
        return {
          data: "",
          returnCode: error.code,
          message: error.message
        };
      });
  }

  public getDirName = (): Promise<GitResponse<string>> => {
    return this.makeRequest("GET", "/git/dirname", null, {
      "Content-Type": "text/plain"
    })
      .then((text: string) => {
        return { data: text, returnCode: 0 };
      })
      .catch(error => {
        return {
          data: "",
          returnCode: error.code,
          message: error.message
        };
      });
  }

  public getLocalBranches = (): Promise<GitBrancesResponse> => {
    return this.runGit("branch").then(response =>
      GitBranchesResponseParser.parse(response)
    );
  }

  public getRemoteBranches = (): Promise<GitBrancesResponse> => {
    return this.runGit("branch --remotes").then(response =>
      GitBranchesResponseParser.parse(response)
    );
  }

  public getTags = (): Promise<GitBrancesResponse> => {
    return this.runGit("tag").then(response =>
      GitBranchesResponseParser.parse(response)
    );
  }

  public getCommits = (
    rows: number,
    from: string
  ): Promise<GitResponse<CommitInfo[]>> => {
    const command: string =
      "log --date-order --pretty=raw --decorate=full --max-count=" +
      (rows + 1) +
      " " +
      from +
      " --";
    return this.runGit(command).then((response: GitResponse<string>) => {
      return CommitInfoResponseParser.parse(rows, response);
    });
  }

  public getDiff = (
    commit: string,
    diffContext: number,
    ignoreWhitespace: boolean,
    gitDiffOpts?: string[],
    gitFile?: string
  ): Promise<GitResponse<Diff>> => {
    let fullCmd = "show " + commit;
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
    return this.runGit(fullCmd).then(response => {
      return {
        data: DiffParser.parse(response.data!),
        message: response.message,
        returnCode: response.returnCode
      };
    });
  }

  public listFiles = (parent: string): Promise<GitResponse<FileInfo[]>> => {
    const readToNext = (str: string, char: string, start: number): string => {
      const end = str.indexOf(char, start);
      return end >= 0 ? str.substring(start, end) : str.substring(start);
    };
    return this.runGit("ls-tree -l " + parent)
      .then((response: GitResponse<string>) => {
        if (response.returnCode !== 0 || !response.data) {
          return {
            data: new Array<FileInfo>(),
            message: response.message,
            returnCode: response.returnCode
          };
        }
        const lines = response.data.split("\n");
        const getFileInfo = (line: string) => {
          // line format
          // {mode} {type} {objectId} {size} {name}
          let start = 0;

          // mode
          let substr = readToNext(line, " ", start);
          start += substr.length + 1;
          const mode = parseInt(substr, 10);

          // type
          const type = readToNext(line, " ", start);
          start += type.length + 1;

          // objectId
          const objectId = readToNext(line, " ", start);
          start += objectId.length + 1;

          // size
          substr = readToNext(line, "\t", start);
          start += substr.length + 1;
          const size = parseInt(substr.trim(), 10);

          // name
          const name = line.substring(start);

          return {
            mode,
            objectId,
            size,
            // tslint:disable-next-line:no-bitwise
            isSymbolicLink: (mode & 120000) === 120000,
            type,
            name,
            parent
          } as FileInfo;
        };
        const data: FileInfo[] = lines
          .filter(line => line !== "")
          .map(getFileInfo);
        const r = {
          data,
          message: response.message,
          returnCode: response.returnCode || 0
        } as GitResponse<FileInfo[]>;
        return r;
      })
      .catch((error: Error & { code: number }) => {
        return {
          data: undefined,
          returnCode: error.code,
          message: error.message
        };
      });
  }

  private runGit = (
    cmd: string,
    arg1?: string
  ): Promise<GitResponse<string>> => {
    // cmd = git command line arguments
    // other arguments = optional stdin content and a callback function:
    // ex:
    // git("log", mycallback)
    // git("commit -F -", "my commit message", mycallback)
    // Convention : first line = git arguments, rest = process stdin
    if (arg1) {
      cmd += "\n" + arg1;
    }

    return this.makeRequest("POST", "/git", cmd, {
      "Content-Type": "text/plain"
    }).then((data: string) => {
      const processed = this.processResponse(data);
      const rcode = parseInt(processed.footers["Git-Return-Code"], 10);
      if (rcode === 0) {
        return {
          data: processed.output,
          returnCode: rcode,
          message: processed.message
        };
      }
      throw {
        code: rcode,
        message: processed.message
      };
    });
  }

  private processResponse = (data: string) => {
    const footers = {};
    let fIndex = data.length;
    while (true) {
      const oldFIndex = fIndex;
      fIndex = data.lastIndexOf("\r\n", fIndex - 1);
      const line = data.substring(fIndex + 2, oldFIndex);
      if (line.length > 0) {
        const footer = line.split(": ");
        footers[footer[0]] = footer[1];
      } else {
        break;
      }
    }

    const messageStartIndex =
      fIndex - parseInt(footers["Git-Stderr-Length"], 10);
    const message = data.substring(messageStartIndex, fIndex);
    const output = data.substring(0, messageStartIndex);
    return { footers, message, output };
  }

  private makeRequest = (
    method: string,
    url: string,
    data: string | null,
    headers: {}
  ) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            code: xhr.status,
            message: xhr.statusText
          });
        }
      };
      xhr.onerror = () => {
        reject({
          code: xhr.status,
          message: xhr.statusText
        });
      };
      // tslint:disable-next-line:forin
      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }
      xhr.send(data);
    });
  }
}

export default new Git();
