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

import React from 'react';
import { Diff, HunkPartType, FileDiff, Hunk } from '../actions/git/Diff';

interface DiffViewProps {
  diff: Diff;
}
export default class DiffView extends React.PureComponent<DiffViewProps, undefined> {

  render() {
    return <div className='panel-body'>
      <div className='diff-view'>
        <div className='diff-view-lines'>
          {this.getDiffLines(this.props.diff)}
        </div>
      </div>
    </div>;
  }

  getDiffLines = (diff: Diff) => {
    if (diff === null) {
      return null;
    }
    let lines: Array<JSX.Element> = [];
    diff.headerLines.forEach((comm, index) => {
      lines.push(this.getDiffLine(comm, 'diff-view-line diff-line-header', 'comm_' + index));
    });
    let fileDiffs: Array<FileDiff> = diff.fileDiffs;
    fileDiffs.forEach((fileDiff, index) => {
      this.addHeaders(fileDiff, lines, index);
      this.addHunks(fileDiff.hunks, lines, index);
    });
    return lines;
  }

  addHeaders = (fileDiff: FileDiff, lines: Array<JSX.Element>, key) => {
    lines.push(<pre className='diff-view-line diff-line-header diff-section-start' key={'fileHeader_' + key}>
      {fileDiff.header}
    </pre>);
    lines.push(<pre className='diff-view-line diff-line-header' key={'fileHeader_mode' + key}>
      {fileDiff.modeLine}
    </pre>);
    lines.push(<pre className='diff-view-line diff-line-del diff-line-header' key={'fileHeader_del' + key}>
      {fileDiff.initialFileLine}
    </pre>);
    lines.push(<pre className='diff-view-line diff-line-add diff-line-header' key={'fileHeader_add' + key}>
      {fileDiff.resultingFileLine}
    </pre>);
  }

  addHunks = (hunks: Array<Hunk>, lines, key) => {
    hunks.forEach((hunk, hunkIndex) => {
      lines.push(<pre className='diff-view-line diff-line-offset' key={'hunkHeader_' + key + '_' + hunkIndex}>
        {hunk.header}
      </pre>);
      this.addHunkPartLines(hunk, lines, 'hunkPart_' + key + '_' + hunkIndex);
    });
  }

  addHunkPartLines = (hunk: Hunk, lines: Array<JSX.Element>, key: string) => {
    for (let hunkPartIndex = 0; hunkPartIndex < hunk.parts.length; hunkPartIndex++) {
      let part = hunk.parts[hunkPartIndex];
      let className = 'diff-view-line';
      if (part.type === HunkPartType.Add) {
        className += ' diff-line-add';
      }
      else if (part.type === HunkPartType.Remove) {
        className += ' diff-line-del';
      }
      let partKey = key + '_' + hunkPartIndex;
      for (let contentIndex = 0; contentIndex < part.content.length; contentIndex++) {
        let line = part.content[contentIndex];
        lines.push(this.getDiffLine(line, className, partKey + '_' + hunkPartIndex + '_' + contentIndex));
      }
    }
  }

  getDiffLine = (line, className, key) => {
    return <pre className={className} key={key}>
      {line}
    </pre>;
  }
}
