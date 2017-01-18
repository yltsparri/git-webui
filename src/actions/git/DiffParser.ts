import { Diff, FileDiff, Hunk, HunkPart, HunkPartType } from './Diff';

interface ParseFileDiffResult {
  endIndex: number;
  fileDiff: FileDiff;
}

export class DiffParser {

  parse(diff: string) {
    var diffLines = diff.split("\n");
    return this.processLines(diffLines);
  }

  processLines = (lines: Array<string>): Diff => {
    let diff = { fileDiffs: [], headerLines: [] };
    let index = 0;
    while (index < lines.length && !lines[index].startsWith('diff --git')) {
      diff.headerLines.push(lines[index]);
      index++;
    }
    while (index < lines.length) {
      let res = this.parseFileDiff(lines, index);
      index = res.endIndex;
      diff.fileDiffs.push(res.fileDiff);
    }
    return diff;
  }

  parseFileDiff = (lines: Array<string>, index: number): ParseFileDiffResult => {
    const hasFileModeLine = lines[index + 1].startsWith('new file mode ') || lines[index + 1].startsWith('deleted file mode ');
    let fileDiff = {
      header: lines[index],
      fileModeLine: hasFileModeLine ? lines[++index] : null,
      indexLine: lines[++index],
      initialFile: '',
      resultingFile: '',
      hunks: []
    };

    //skip --- a/ and +++ b/ parts
    let initialFile = lines[++index];
    let resultingFile = lines[++index];
    fileDiff.initialFile = initialFile.substring(initialFile.indexOf('/') + 1);
    fileDiff.resultingFile = resultingFile.substring(resultingFile.indexOf('/') + 1);

    let hunk: Hunk = { header: lines[++index], parts: [] };
    let hunkPart: HunkPart = {
      content: [],
      type: this.getHunkType(lines[index + 1])
    };

    /* continue from line after index */
    while (++index < lines.length && !lines[index].startsWith('diff --git')) {
      let line = lines[index];
      if (line.startsWith('@@ ')) {
        fileDiff.hunks.push(hunk);
        hunk.parts.push(hunkPart);
        hunkPart = { content: [], type: HunkPartType.Keep };
        hunk = { header: line, parts: [] };
      }
      else {
        let mode = this.getHunkType(line);
        if (hunkPart.type === mode) {
          hunkPart.content.push(line);
        }
        else {
          hunk.parts.push(hunkPart);
          hunkPart = { content: [line], type: this.getHunkType(line) };
        }
      }
    }
    fileDiff.hunks.push(hunk);
    hunk.parts.push(hunkPart);
    return { endIndex: index, fileDiff: fileDiff };
  }

  private getHunkType = (line: string) => {
    if (line.startsWith('+')) {
      return HunkPartType.Add;
    }
    else if (line.startsWith('-')) {
      return HunkPartType.Remove;
    }
    else {
      return HunkPartType.Keep;
    }
  }
}

export default new DiffParser();
