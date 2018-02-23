import * as React from 'react';
import { Offset } from '../actions/AppState';

export interface FilePair {
  from: string;
  to: string;
  index: number;
}

export interface ExploreNavigationProps {
  files: Array<FilePair>;
  commitDetails: string;
  selected: number;
  filesOffset: Offset;
}

export interface ExploreNavigationActions {
  fileSelected(file: FilePair);
  onFilesScroll?: (event: React.UIEvent<HTMLDivElement>) => any;
}

interface CombinedExploreNavigationProps extends ExploreNavigationProps, ExploreNavigationActions {

}
export default class ExploreNavigation extends React.PureComponent<CombinedExploreNavigationProps, undefined> {
  
  private leftFileList: HTMLDivElement;
  private rightFileList: HTMLDivElement;

  componentDidMount() {
    const offset = this.props.filesOffset;
    if (offset) {
      this.setOffset(offset);
    }
  }

  componentDidUpdate(prevProps: CombinedExploreNavigationProps) {
    const offset = this.props.filesOffset;
    const prevOffset = prevProps.filesOffset || { left: 0, top: 0 };
    if (offset && (prevOffset.left !== offset.left || offset.top !== prevOffset.top)) {
      this.setOffset(offset);
    }
  }

  render() {
    return <div id="commit-explorer-navigator-view">
      <div className="file-list-view panel panel-default">
        <div className="panel-heading">
          <h5> Files </h5>
        </div>
        {this.renderFileList()}
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h5> Commit Details </h5>
        </div>
        <div className="panel-body" style={{ whiteSpace: 'pre' }}>
          {this.props.commitDetails}
        </div>
      </div>
    </div>;
  }

  setOffset = (offset: Offset) => {
    const lnode = this.leftFileList;
    lnode.scrollTop = offset.top;
    lnode.scrollLeft = offset.left;
    const rnode = this.rightFileList;
    rnode.scrollTop = offset.top;
    rnode.scrollLeft = offset.left;
  }

  renderFileList = () => {
    return <div className="file-list-container">
      <div className="file-list-left-container" ref={(fileList) => this.leftFileList = fileList} onScroll={this.props.onFilesScroll}>
        <div className="list-group">
          {
            this.props.files ? this.props.files.map((fileDiff, index) => {
              let className = 'list-group-item';
              if (this.props.selected === index) {
                className += ' active';
              }
              return <a className={className} href='#' onClick={() => this.props.fileSelected(fileDiff)}>{fileDiff.from}</a>;
            }) : null
          }
        </div>
      </div>
      <div className="file-list-right-container"  ref={(fileList) => this.rightFileList = fileList}onScroll={this.props.onFilesScroll}>
        <div className="list-group">
          {
            this.props.files ? this.props.files.map((fileDiff, index) => {
              let className = 'list-group-item';
              if (this.props.selected === index) {
                className += ' active';
              }
              return <a className={className} href='#' onClick={() => this.props.fileSelected(fileDiff)}>{fileDiff.to}</a>;
            }) : null
          }
        </div>
      </div>
    </div>;
  }
}
