import * as React from "react";
import FileInfo from "../actions/git/FileInfo";

export interface TreeViewDataProps {
  path: FileInfo[];
  files: FileInfo[];
  onNodeSelected(node: FileInfo): void;
}

export default class TreeView extends React.PureComponent<TreeViewDataProps> {
  public render() {
    const path: FileInfo[] = this.props.path;
    const files: FileInfo[] = this.props.files;

    const breadcrumb = (
      <ol className="breadcrumb">
        {path.map(node => (
          <li onClick={this.handleNodeSelected(node)}>
            <a href="#">{node.name}</a>
          </li>
        ))}
      </ol>
    );

    return (
      <div id="tree-view">
        {breadcrumb}
        {this.renderContent(path, files)}
      </div>
    );
  }

  private renderContent = (path: FileInfo[], files: FileInfo[]) => {
    const node = path[path.length - 1];
    if (node && node.type === "blob") {
      // TODO: Show HTML source instead of rendering content as HTML page.
      return (
        <div id="tree-view-blob-content">
          <iframe src={"/git/cat-file/" + path[path.length - 1].objectId} />
        </div>
      );
    }
    return (
      <div id="tree-view-tree-content" className="list-group">
        {this.renderMoveUpNode(path)}
        {this.sortFoldersFirst(files).map(item => this.renderFileItem(item))}
      </div>
    );
  }

  private handleNodeSelected = (
    node: FileInfo
  ): ((event: React.MouseEvent<HTMLElement>) => void) | undefined => {
    return () => this.props.onNodeSelected(node);
  }

  private renderFileItem(node: FileInfo) {
    const formatedSize = this.getFormatedSize(node.size);
    const className =
      "tree-item-" +
      node.type +
      (node.isSymbolicLink ? " tree-item-symlink" : "");

    return (
      <a href="#" className="list-group-item">
        <span className={className} onClick={this.handleNodeSelected(node)}>
          {node.name}
        </span>
        <span>{formatedSize.size}</span>
        &nbsp;
        <span>{formatedSize.unit}</span>
      </a>
    );
  }

  private sortFoldersFirst(files: FileInfo[]) {
    return files.slice().sort((item1, item2) => {
      if (item1.type === item2.type) {
        return item1.name.localeCompare(item2.name);
      }
      return (item1.type === "tree") < (item2.type === "tree") ? 1 : -1;
    });
  }

  private renderMoveUpNode(path: FileInfo[]) {
    return path.length > 1 ? (
      <a
        href="#"
        className="list-group-item"
        onClick={this.handleNodeSelected(path[path.length - 2])}
      >
        <span className="tree-item-tree">..</span>
        <span />
        <span />
      </a>
    ) : null;
  }

  private getFormatedSize(size: number) {
    if (isNaN(size)) {
      return {
        size: "",
        unit: ""
      };
    }
    if (size < 1024) {
      return {
        size: size.toString(),
        unit: ""
      };
    } else if (size < 1024 * 1024) {
      return {
        size: (size / 1024).toFixed(2),
        unit: "K"
      };
    } else if (size < 1024 * 1024 * 1024) {
      return {
        size: ((size / 1024) * 1024).toFixed(2),
        unit: "M"
      };
    } else {
      return {
        size: ((size / 1024) * 1024 * 1024).toFixed(2),
        unit: "G"
      };
    }
  }
}
