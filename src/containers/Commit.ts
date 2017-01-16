import ActionCreators from '../actions/ActionCreators';
import { AppState } from '../actions/AppState';
import { connect } from 'react-redux';
import CommitView, { CommitViewActionProps, CommitViewStateProps } from '../components/CommitView';
import FileInfo from '../actions/git/FileInfo';



const mapStateToProps = (state: AppState) => {
  return {
    diff: state.historyViewOptions.diff,
    ignoreWhitespace: state.historyViewOptions.ignoreWhitespace,
    diffContext: state.historyViewOptions.diffContext,
    fullFileDiff: state.historyViewOptions.fullFileDiff,
    diffViewMode: state.historyViewOptions.diffViewMode,
    path: state.historyViewOptions.path,
    files: state.historyViewOptions.files,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleIgnoreWhiteSpace: () => {
      dispatch(ActionCreators.toggleIgnoreWhiteSpace());
    },
    updateDiffContext: (diffContext: number) => {
      dispatch(ActionCreators.setDiffContext(diffContext));
    },
    onNodeSelected: (node: FileInfo) => {
      dispatch(ActionCreators.loadNode(node));
    },
    toggleShowFullFile: () => {
      dispatch(ActionCreators.toggleShowFullFile());
    },
    onExloreClicked: () => {

    }
  };
};

export default connect<CommitViewStateProps, CommitViewActionProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(CommitView);
