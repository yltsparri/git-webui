import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import {
  setDiffContext,
  toggleIgnoreWhiteSpace,
  toggleShowFullFile
} from "../actions/actioncreators/Diff";
import { changeAppMode } from "../actions/actioncreators/Navigation";
import { selectNode } from "../actions/actioncreators/Tree";
import { AppMode, AppState } from "../actions/AppState";
import { FileInfo } from "../actions/git/FileInfo";
import {
  CommitView,
  CommitViewActionProps,
  CommitViewStateProps
} from "./CommitView";

const mapStateToProps = (state: AppState): CommitViewStateProps => {
  return {
    diff: state.commitDiff.fileDiffs,
    headerLines: state.commitDiff.headerLines,
    ignoreWhitespace: state.diffOptions.ignoreWhitespace,
    diffContext: state.diffOptions.context,
    fullFileDiff: state.diffOptions.fullFile,
    diffViewMode: state.commits.viewMode,
    path: state.commitTree.path,
    files: state.commitTree.files
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    toggleIgnoreWhiteSpace: () => {
      dispatch((toggleIgnoreWhiteSpace() as {}) as AnyAction);
    },
    updateDiffContext: (diffContext: number) => {
      dispatch((setDiffContext(diffContext) as {}) as AnyAction);
    },
    onNodeSelected: (node: FileInfo) => {
      dispatch((selectNode(node) as {}) as AnyAction);
    },
    toggleShowFullFile: () => {
      dispatch((toggleShowFullFile() as {}) as AnyAction);
    },
    onExloreClicked: () => {
      dispatch(changeAppMode(AppMode.Explore));
    }
  };
};

export const CommitContainer = connect<
  CommitViewStateProps,
  CommitViewActionProps,
  any
>(
  mapStateToProps,
  mapDispatchToProps
)(CommitView);
