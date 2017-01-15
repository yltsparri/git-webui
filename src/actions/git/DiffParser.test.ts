import DiffParser from './DiffParser';
import { HunkPartType } from './Diff';

describe('Diff parser with context 3', () => {
  var diffString = `commit 8f1b45bf139ae36b24a17a343a3dfbf1f3b3e9cf
Author: Ülo Parri <yltsparri@gmail.com>
Date:   Sat Jan 14 14:55:49 2017 +0200

    Create constants for action types

diff --git a/src/actions/ActionCreators.ts b/src/actions/ActionCreators.ts
index 7ae17c4..c4e46e0 100644
--- a/src/actions/ActionCreators.ts
+++ b/src/actions/ActionCreators.ts
@@ -22,6 +22,8 @@ import BranchStatus from './git/BranchStatus';
 import FileInfo from './git/FileInfo';
 import Git from './git/Git';
 import { AppMode, AppState, DiffViewMode } from './AppState';
+import Actions from './Actions';
+import GitResponse from './git/GitResponse';
 
 const git = new Git();
 const loadDiff = (commit: string) => {
`;

  let diff = DiffParser.parse(diffString);
  it("Header lines count", () => {
    expect(diff.headerLines.length).toBe(6);
  });
  it("File count", () => {
    expect(diff.fileDiffs.length).toBe(1);
  });
  it("First hunk", () => {
    let firstHunk = diff.fileDiffs[0].hunks[0];
    expect(firstHunk.header).toBe("@@ -22,6 +22,8 @@ import BranchStatus from './git/BranchStatus';");
    expect(diff.fileDiffs[0].hunks.length).toBe(1);
  });
  it("First hunk, first part", () => {
    let firstHunkPart = diff.fileDiffs[0].hunks[0].parts[0];
    expect(firstHunkPart.content.length).toBe(3);
    expect(firstHunkPart.type).toBe(HunkPartType.Keep);
    expect(firstHunkPart.content[0]).toBe(" import FileInfo from './git/FileInfo';");
    expect(firstHunkPart.content[1]).toBe(" import Git from './git/Git';");
    expect(firstHunkPart.content[2]).toBe(" import { AppMode, AppState, DiffViewMode } from './AppState';");
  });
  it("First hunk, second part", () => {
    let hunkPart = diff.fileDiffs[0].hunks[0].parts[1];
    expect(hunkPart.content.length).toBe(2);
    expect(hunkPart.type).toBe(HunkPartType.Add);
    expect(hunkPart.content[0]).toBe("+import Actions from './Actions';");
    expect(hunkPart.content[1]).toBe("+import GitResponse from './git/GitResponse';");
  });
  it("First hunk, third part", () => {
    let hunkPart = diff.fileDiffs[0].hunks[0].parts[2];
    expect(hunkPart.content.length).toBe(4);
    expect(hunkPart.type).toBe(HunkPartType.Keep);
    expect(hunkPart.content[0]).toBe(" ");
    expect(hunkPart.content[1]).toBe(" const git = new Git();");
    expect(hunkPart.content[2]).toBe(" const loadDiff = (commit: string) => {");
    expect(hunkPart.content[3]).toBe("");
  });
});

describe('Diff parser with context 0', () => {
  var diffString = `commit 8f1b45bf139ae36b24a17a343a3dfbf1f3b3e9cf
Author: Ülo Parri <yltsparri@gmail.com>
Date:   Sat Jan 14 14:55:49 2017 +0200

    Create constants for action types

diff --git a/src/actions/ActionCreators.ts b/src/actions/ActionCreators.ts
index 7ae17c4..c4e46e0 100644
--- a/src/actions/ActionCreators.ts
+++ b/src/actions/ActionCreators.ts
@@ -22,6 +22,8 @@ import BranchStatus from './git/BranchStatus';
+import Actions from './Actions';
+import GitResponse from './git/GitResponse';
`;

  let diff = DiffParser.parse(diffString);
  it("Header lines count", () => {
    expect(diff.headerLines.length).toBe(6);
  });
  it("File count", () => {
    expect(diff.fileDiffs.length).toBe(1);
  });
  it("First hunk", () => {
    let firstHunk = diff.fileDiffs[0].hunks[0];
    expect(firstHunk.header).toBe("@@ -22,6 +22,8 @@ import BranchStatus from './git/BranchStatus';");
    expect(diff.fileDiffs[0].hunks.length).toBe(1);
  });
  it("First hunk, first part", () => {
    let hunkPart = diff.fileDiffs[0].hunks[0].parts[0];
    expect(hunkPart.content.length).toBe(2);
    expect(hunkPart.type).toBe(HunkPartType.Add);
    expect(hunkPart.content[0]).toBe("+import Actions from './Actions';");
    expect(hunkPart.content[1]).toBe("+import GitResponse from './git/GitResponse';");
  });
  it("First hunk, second part", () => {
    let hunkPart = diff.fileDiffs[0].hunks[0].parts[1];
    expect(hunkPart.content.length).toBe(1);
    expect(hunkPart.type).toBe(HunkPartType.Keep);
    expect(hunkPart.content[0]).toBe("");
  });
});

describe('Diff parser with context 3, multiple hunks', () => {
  var diffString = `commit 8f1b45bf139ae36b24a17a343a3dfbf1f3b3e9cf
Author: Ülo Parri <yltsparri@gmail.com>
Date:   Sat Jan 14 14:55:49 2017 +0200

    Create constants for action types

diff --git a/src/actions/ActionCreators.ts b/src/actions/ActionCreators.ts
index 7ae17c4..c4e46e0 100644
--- a/src/actions/ActionCreators.ts
+++ b/src/actions/ActionCreators.ts
@@ -22,6 +22,8 @@ import BranchStatus from './git/BranchStatus';
 import FileInfo from './git/FileInfo';
 import Git from './git/Git';
 import { AppMode, AppState, DiffViewMode } from './AppState';
+import Actions from './Actions';
+import GitResponse from './git/GitResponse';
 
 const git = new Git();
 const loadDiff = (commit: string) => {
@@ -33,10 +35,10 @@ const loadDiff = (commit: string) => {
       diffContext = 99999999;
     }
     return git.getDiff(commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile)
-      .then(diff => {
-        dispatch({ type: 'UPDATE_COMMIT_VIEW_DATA', data: { diff: diff.data } });
-        if (diff.message) {
-          dispatch({ type: 'ADD_MESSAGE', message: diff.message });
+      .then(response => {
+        dispatch({ type: Actions.UPDATE_COMMIT_VIEW_DATA, data: { diff: response.data } });
+        if (response.message) {
+          dispatch(addResponseMessage(response));
         }
       });
   };
`;

  let diff = DiffParser.parse(diffString);
  it("Header lines count", () => {
    expect(diff.headerLines.length).toBe(6);
  });
  it("File count", () => {
    expect(diff.fileDiffs.length).toBe(1);
  });
  it("First hunk", () => {
    let firstHunk = diff.fileDiffs[0].hunks[0];
    expect(firstHunk.header).toBe("@@ -22,6 +22,8 @@ import BranchStatus from './git/BranchStatus';");
    expect(diff.fileDiffs[0].hunks.length).toBe(2);
  });
  it("Second hunk, first part", () => {
    let firstHunkPart = diff.fileDiffs[0].hunks[1].parts[0];
    expect(firstHunkPart.content.length).toBe(3);
    expect(firstHunkPart.type).toBe(HunkPartType.Keep);
    expect(firstHunkPart.content[0]).toBe("       diffContext = 99999999;");
    expect(firstHunkPart.content[1]).toBe("     }");
    expect(firstHunkPart.content[2]).toBe("     return git.getDiff(commit, diffContext, ignoreWhitespace, gitDiffOpts, gitFile)");
  });
  it("Second hunk header", () => {
    let hunk = diff.fileDiffs[0].hunks[1];
    expect(hunk.header).toBe("@@ -33,10 +35,10 @@ const loadDiff = (commit: string) => {");
    expect(hunk.parts.length).toBe(4);
  });
  it("Last hunk, last part", () => {
    let hunks = diff.fileDiffs[0].hunks;
    let hunk =  hunks[hunks.length - 1];
    let hunkPart = hunk.parts[hunk.parts.length - 1];
    expect(hunkPart.content.length).toBe(4);
    expect(hunkPart.type).toBe(HunkPartType.Keep);
    expect(hunkPart.content[0]).toBe("         }");
    expect(hunkPart.content[1]).toBe("       });");
    expect(hunkPart.content[2]).toBe("   };");
    expect(hunkPart.content[3]).toBe("");
  });
});
