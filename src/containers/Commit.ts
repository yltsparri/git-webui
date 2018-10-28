import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import DiffActions from "../actions/actioncreators/Diff";
import NavigationActions from "../actions/actioncreators/Navigation";
import TreeActions from "../actions/actioncreators/Tree";
import { AppMode, AppState } from "../actions/AppState";
import FileInfo from "../actions/git/FileInfo";
import CommitView, {
  CommitViewActionProps,
  CommitViewStateProps
} from "../components/CommitView";

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
      dispatch((DiffActions.toggleIgnoreWhiteSpace() as {}) as AnyAction);
    },
    updateDiffContext: (diffContext: number) => {
      dispatch((DiffActions.setDiffContext(diffContext) as {}) as AnyAction);
    },
    onNodeSelected: (node: FileInfo) => {
      dispatch((TreeActions.selectNode(node) as {}) as AnyAction);
    },
    toggleShowFullFile: () => {
      dispatch((DiffActions.toggleShowFullFile() as {}) as AnyAction);
    },
    onExloreClicked: () => {
      dispatch(NavigationActions.changeAppMode(AppMode.Explore));
    }
  };
};

export default connect<CommitViewStateProps, CommitViewActionProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(CommitView);
