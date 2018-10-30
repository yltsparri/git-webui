import { Diff, FileDiff, Hunk, HunkPart, HunkPartType } from "./Diff";
  public parse(diff: string) {
    const diffLines = diff.split("\n");
  public processLines = (lines: string[]): Diff => {
    const diff = {
      fileDiffs: new Array<FileDiff>(),
      headerLines: new Array<string>()
    };
    while (index < lines.length && !lines[index].startsWith("diff --git")) {
      const res = this.parseFileDiff(lines, index);
  public parseFileDiff = (
    lines: string[],
    index: number
  ): ParseFileDiffResult => {
    const hasFileModeLine =
      lines[index + 1].startsWith("new file mode ") ||
      lines[index + 1].startsWith("deleted file mode ");
    const fileDiff = {
      initialFile: "",
      resultingFile: "",
      hunks: new Array<Hunk>()
    } as FileDiff;
    // skip --- a/ and +++ b/ parts
    const initialFile = lines[++index];
    const resultingFile = lines[++index];
    fileDiff.initialFile = initialFile.substring(initialFile.indexOf("/") + 1);
    fileDiff.resultingFile = resultingFile.substring(
      resultingFile.indexOf("/") + 1
    );
    while (++index < lines.length && !lines[index].startsWith("diff --git")) {
      const line = lines[index];
      if (line.startsWith("@@ ")) {
      } else {
        const mode = this.getHunkType(line);
        } else {
    return { endIndex: index, fileDiff };
    if (line.startsWith("+")) {
    } else if (line.startsWith("-")) {
    } else {