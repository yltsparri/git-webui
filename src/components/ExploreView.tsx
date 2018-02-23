import * as React from 'react';
import {Offset} from '../actions/AppState';
import DiffView, { DiffViewMode } from './DiffView';
import { FileDiff } from '../actions/git/Diff';

export interface ExploreViewStateProps {
  removedLinesDiff: FileDiff;
  position: Offset;
  addedLinesDiff: FileDiff;
  ExploreNavigation: React.ComponentClass<any>;
}

export interface ExploreViewActions {
  onScroll: (event: React.UIEvent<HTMLDivElement>) => any;
}

interface ExploreViewProps extends ExploreViewStateProps, ExploreViewActions { }

export default class ExploreView extends React.PureComponent<ExploreViewProps, undefined>{
  render() {
    const {removedLinesDiff, addedLinesDiff, ExploreNavigation} = this.props;
    const removedLinesDiffs = removedLinesDiff ? [removedLinesDiff] : [];
    const addedLinesDiffs = addedLinesDiff ? [addedLinesDiff] : [];
    return <div id="commit-explorer-view">
      <div id="commit-explorer-diff-view">
        <div className="diff-view-container panel panel-default">
          <div className="panel-body split-diff-view">
            <DiffView diff={removedLinesDiffs} headerLines={[]} diffViewMode={DiffViewMode.Removed} onScroll={this.props.onScroll} offset={this.props.position}/>
            <DiffView diff={addedLinesDiffs} headerLines={[]} diffViewMode={DiffViewMode.Added} onScroll={this.props.onScroll} offset={this.props.position}/>
          </div>
        </div>
      </div>
      <ExploreNavigation />
    </div>;
  }
}
