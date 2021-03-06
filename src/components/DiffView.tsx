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

import memoizeOne from "memoize-one";
import * as React from "react";

import { Offset } from "../actions/AppState";
import { FileDiff, Hunk, HunkPartType } from "../actions/git/Diff";

export enum DiffViewMode {
  Full = 0,
  Removed = 1,
  Added = 2
}

interface DiffViewProps {
  diff: FileDiff[];
  headerLines: string[];
  diffViewMode: DiffViewMode;
  offset?: Offset;
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => any;
}

export class DiffView extends React.PureComponent<DiffViewProps> {
  private diffView: HTMLDivElement;

  private getDiffLines = memoizeOne((fileDiffs: FileDiff[]) => {
    if (fileDiffs === null) {
      return null;
    }
    const lines: JSX.Element[] = [];
    fileDiffs.forEach((fileDiff, index) => {
      this.addHeaders(fileDiff, lines, index);
      this.addHunks(fileDiff.hunks, lines, index);
    });
    return lines;
  });

  public componentDidMount() {
    const offset = this.props.offset;
    if (offset) {
      this.setOffset(offset);
    }
  }

  public componentDidUpdate(prevProps: DiffViewProps) {
    const offset = this.props.offset;
    const prevOffset = prevProps.offset || { left: 0, top: 0 };
    if (
      offset &&
      (prevOffset.left !== offset.left || offset.top !== prevOffset.top)
    ) {
      this.setOffset(offset);
    }
  }

  public render() {
    return (
      <div className="panel-body">
        <div
          className="diff-view"
          ref={(diffView: HTMLDivElement) => (this.diffView = diffView)}
          onScroll={this.props.onScroll}
        >
          <div className="diff-view-lines">
            {this.props.headerLines.map((comm, index) => {
              return this.getDiffLine(
                comm,
                "diff-view-line diff-line-header",
                "comm_" + index
              );
            })}
            {this.getDiffLines(this.props.diff)}
          </div>
        </div>
      </div>
    );
  }

  public setOffset = (offset: Offset) => {
    const node = this.diffView;
    node.scrollTop = offset.top;
    node.scrollLeft = offset.left;
  }

  public addHeaders = (
    fileDiff: FileDiff,
    lines: JSX.Element[],
    key: number
  ) => {
    if (fileDiff === null) {
      return;
    }
    lines.push(
      <pre
        className="diff-view-line diff-line-header"
        key={"fileHeader_" + key}
      >
        {[fileDiff.header, fileDiff.indexLine, fileDiff.fileModeLine].join(
          "\n"
        )}
      </pre>
    );
    if (this.props.diffViewMode !== DiffViewMode.Added) {
      lines.push(
        <pre
          className="diff-view-line diff-line-del diff-line-header"
          key={"fileHeader_del" + key}
        >
          {"--- a/" + fileDiff.initialFile}
        </pre>
      );
    }
    if (this.props.diffViewMode !== DiffViewMode.Removed) {
      lines.push(
        <pre
          className="diff-view-line diff-line-add diff-line-header"
          key={"fileHeader_add" + key}
        >
          {"+++ b/" + fileDiff.resultingFile}
        </pre>
      );
    }
  }

  public addHunks = (hunks: Hunk[], lines: React.ReactNode[], key: number) => {
    if (!hunks) {
      return;
    }
    hunks.forEach((hunk, hunkIndex) => {
      lines.push(
        <pre
          className="diff-view-line diff-line-offset"
          key={"hunkHeader_" + key + "_" + hunkIndex}
        >
          {hunk.header}
        </pre>
      );
      this.addHunkPartLines(hunk, lines, "hunkPart_" + key + "_" + hunkIndex);
    });
  }

  public addHunkPartLines = (
    hunk: Hunk,
    lines: React.ReactNode[],
    key: string
  ) => {
    for (
      let hunkPartIndex = 0;
      hunkPartIndex < hunk.parts.length;
      hunkPartIndex++
    ) {
      const part = hunk.parts[hunkPartIndex];
      const className = this.getHunkPartClassName(part.type);
      const partKey = key + "_" + hunkPartIndex;
      const content = part.content;
      lines.push(
        <pre className={className} key={partKey}>
          {content.join("\n")}
        </pre>
      );
    }
  }

  public getHunkPartClassName = (hunkPartType: HunkPartType | null) => {
    let className = "diff-view-line";
    if (hunkPartType === null) {
      className += " diff-line-phantom";
    } else if (hunkPartType === HunkPartType.Add) {
      className += " diff-line-add";
    } else if (hunkPartType === HunkPartType.Remove) {
      className += " diff-line-del";
    }
    return className;
  }

  public getDiffLine = (
    line: React.ReactNode,
    className: string,
    key: string
  ) => {
    return (
      <pre className={className} key={key}>
        {line}
      </pre>
    );
  }
}
