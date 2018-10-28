import { CommitInfo, Person, Ref, RefType } from "./CommitInfo";
import GitResponse from "./GitResponse";

export class CommitInfoResponseParser {
  public parse = (
    rows: number,
    response: GitResponse<string>
  ): GitResponse<CommitInfo[]> => {
    if (response.returnCode !== 0) {
      throw { message: response.message, returnCode: response.returnCode };
    }
    let start = 0;
    const commits: CommitInfo[] = [];
    const data = response.data!;
    while (true) {
      const end = data.indexOf("\ncommit ", start);
      if (end !== -1) {
        const commit = this.parseCommit(data.substr(start, end - start));
        if (commits.length < rows) {
          commits.push(commit);
        }
      } else {
        commits.push(this.parseCommit(data.substr(start)));
        break;
      }
      start = end + 1;
    }
    return { data: commits, message: undefined, returnCode: 0 };
  }

  private parseCommit = (data: string): CommitInfo => {
    const commit: Partial<CommitInfo> = {
      parents: [],
      refs: []
    };

    data.split("\n").forEach(line => {
      if (line.indexOf("commit ") === 0) {
        commit.hash = line.substr(7, 40);
        if (line.length > 47) {
          const s = line.lastIndexOf("(") + 1;
          const e = line.lastIndexOf(")");
          commit.refs = line
            .substr(s, e - s)
            .split(", ")
            .map(ref => this.parseRef(ref));
        }
      } else if (line.indexOf("parent ") === 0) {
        commit.parents!.push(line.substr(7));
      } else if (line.indexOf("tree ") === 0) {
        commit.tree = line.substr(5);
      } else if (line.indexOf("author ") === 0) {
        commit.author = this.parsePerson(line.substr(7));
      } else if (line.indexOf("committer ") === 0) {
        commit.committer = this.parsePerson(line.substr(10));
      } else if (line.indexOf("    ") === 0) {
        commit.message = line.substr(4) + "\n";
      }
    });
    return commit as CommitInfo;
  }

  private parseRef(data: string): Ref {
    if (data.indexOf("refs/remotes") === 0) {
      return { text: data.substr(13), type: RefType.Remote };
    } else if (data.indexOf("refs/heads") === 0) {
      return { text: data.substr(11), type: RefType.Head };
    } else if (data.indexOf("tag: refs/tags") === 0) {
      return { text: data.substr(15), type: RefType.Tag };
    } else {
      return { text: data, type: RefType.Unspecified };
    }
  }

  private parsePerson(data: string): Person {
    const nameEnd = data.indexOf("<");
    const name = data.substr(0, nameEnd - 1);
    const emailEnd = data.indexOf(">", nameEnd);
    const email = data.substr(nameEnd + 1, emailEnd - nameEnd - 1);
    const dateEnd = data.indexOf(" ", emailEnd + 2);
    const secs = data.substr(emailEnd + 2, dateEnd - emailEnd - 2);
    const date = new Date(0);
    date.setUTCSeconds(parseInt(secs, 10));
    return {
      name,
      email,
      date
    };
  }
}

export default new CommitInfoResponseParser();
