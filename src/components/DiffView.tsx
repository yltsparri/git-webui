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
interface DiffViewProps {
  diff: string;
}
export default class DiffView extends React.PureComponent<DiffViewProps, undefined> {

  render() {
    var context = { inHeader: true };
    var diffLines = this.props.diff !== null ? this.props.diff.split("\n") : [];
    let children = diffLines.map((line, index) => this.addDiffLine(line, context, index));
    return <div className='panel-body'>
      <div className='diff-view'>
        <div className='diff-view-lines'>
          {children}
        </div>
      </div>
    </div>;
  }
  addDiffLine = (line, context, index) => {
    const c = line[0];
    let className: string = 'diff-view-line';
    if (c === '+') {
      className += " diff-line-add";
    } else if (c === '-') {
      className += " diff-line-del";
    } else if (c === '@') {
      context.inHeader = false;
      className += " diff-line-offset";
    } else if (c === 'd') {
      context.inHeader = true;
      className += " diff-line-offset";
    }
    if (context.inHeader) {
      className += " diff-line-header";
      if (c === 'd') { className += " diff-section-start"; }
    }
    return <pre className={className} key={index}>
      {line}
    </pre>;
  }
}
