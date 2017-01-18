import DiffActions from '../actions/actioncreators/Diff';
import NavigationActions from '../actions/actioncreators/Navigation';
import TreeActions from '../actions/actioncreators/Tree';
import { AppState, AppMode } from '../actions/AppState';
import { connect } from 'react-redux';
import CommitView, { CommitViewActionProps, CommitViewStateProps } from '../components/CommitView';
import FileInfo from '../actions/git/FileInfo';



const mapStateToProps = (state: AppState): CommitViewStateProps => {
  return {
    diff: state.commitDiff.fileDiffs,
    headerLines: state.commitDiff.headerLines,
    ignoreWhitespace: state.diffOptions.ignoreWhitespace,
    diffContext: state.diffOptions.context,
    fullFileDiff: state.diffOptions.fullFile,
    diffViewMode: state.commits.viewMode,
    path: state.commitTree.path,
    files: state.commitTree.files,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleIgnoreWhiteSpace: () => {
      dispatch(DiffActions.toggleIgnoreWhiteSpace());
    },
    updateDiffContext: (diffContext: number) => {
      dispatch(DiffActions.setDiffContext(diffContext));
    },
    onNodeSelected: (node: FileInfo) => {
      dispatch(TreeActions.selectNode(node));
    },
    toggleShowFullFile: () => {
      dispatch(DiffActions.toggleShowFullFile());
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
