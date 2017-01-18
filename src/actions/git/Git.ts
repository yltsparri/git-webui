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

import FileInfo from './FileInfo';
import GitBranchesResponseParser from './GitBranchesResponseParser';
import GitBrancesResponse from './GitBrancesResponse';
import GitResponse from './GitResponse';
import CommitInfoResponseParser from './CommitInfoResponseParser';
import CommitInfo from './CommitInfo';
import DiffParser from './DiffParser';
import { Diff } from './Diff';

export class Git {

  getViewOnly = (): Promise<GitResponse<string>> => {

    return this.makeRequest('GET', 'viewonly', null, { 'Content-Type': 'text/plain' })
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
    return this.makeRequest('GET', 'dirname', null, { 'Content-Type': 'text/plain' })
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
    return this.runGit('branch', null)
      .then(response => GitBranchesResponseParser.parse(response));
  }

  getRemoteBranches = (): Promise<GitBrancesResponse> => {
    return this.runGit('branch --remotes', null)
      .then(response => GitBranchesResponseParser.parse(response));
  }

  getTags = (): Promise<GitBrancesResponse> => {
    return this.runGit('tag', null)
      .then(response => GitBranchesResponseParser.parse(response));
  }

  getCommits = (rows: number, from: string): Promise<GitResponse<Array<CommitInfo>>> => {
    const command: string = "log --date-order --pretty=raw --decorate=full --max-count=" + (rows + 1) + " " + from + " --";
    return this.runGit(command, null)
      .then((response: GitResponse<string>) => {
        return CommitInfoResponseParser.parse(rows, response);
      });
  }

  getDiff = (commit: string,
    diffContext: number,
    ignoreWhitespace: boolean,
    gitDiffOpts?: Array<string>,
    gitFile?: string): Promise<GitResponse<Diff>> => {
    let fullCmd = 'show ' + commit;
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
    return this.runGit(fullCmd, null)
      .then(response => {
        return {
          data: DiffParser.parse(response.data),
          message: response.message,
          returnCode: response.returnCode
        };
      });
  }

  listFiles = (parent: string): Promise<GitResponse<Array<FileInfo>>> => {
    let readToNext = (str: string, char: string, start: number): string => {
      var end = str.indexOf(char, start);
      return end >= 0 ? str.substring(start, end) : str.substring(start);
    };
    return this.runGit('ls-tree -l ' + parent, null)
      .then(response => {
        if (response.returnCode !== 0) {
          return {
            data: null,
            message: response.message,
            returnCode: response.returnCode
          };
        }
        let lines = response.data.split('\n');
        let data = lines.filter(line => line !== '')
          .map(line => {
            // line format
            // {mode} {type} {objectId} {size} {name}
            let start = 0;

            // mode
            let substr = readToNext(line, ' ', start);
            start += substr.length + 1;
            let mode = parseInt(substr);

            // type
            let type = readToNext(line, ' ', start);
            start += type.length + 1;

            // objectId
            let objectId = readToNext(line, ' ', start);
            start += objectId.length + 1;

            // size
            substr = readToNext(line, '\t', start);
            start += substr.length + 1;
            let size = parseInt(substr.trim());

            // name
            let name = line.substring(start);

            return {
              mode: mode,
              objectId: objectId,
              size: size,
              isSymbolicLink: (mode & 120000) === 120000,
              type: type,
              name: name,
              parent: parent
            };
          });
        return {
          data: data,
          message: response.message,
          returnCode: response.returnCode
        };
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

  private runGit = (cmd: string, arg1: string): Promise<GitResponse<string>> => {
    // cmd = git command line arguments
    // other arguments = optional stdin content and a callback function:
    // ex:
    // git("log", mycallback)
    // git("commit -F -", "my commit message", mycallback)
    // Convention : first line = git arguments, rest = process stdin
    if (arg1) {
      cmd += "\n" + arg1;
    }

    return this.makeRequest('POST', 'git', cmd, { 'Content-Type': 'text/plain' })
      .then((data: string) => {
        let processed = this.processResponse(data);
        var rcode = parseInt(processed.footers["Git-Return-Code"]);
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
    return { footers, message, output };
  }

  private makeRequest = (method, url, data, headers) => {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject({
            code: xhr.status,
            message: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          code: xhr.status,
          message: xhr.statusText
        });
      };
      for (var key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }
      xhr.send(data);
    });
  }
}

export default new Git();
