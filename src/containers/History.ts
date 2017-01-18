import DiffActions from '../actions/actioncreators/Diff';
import CommitActions from '../actions/actioncreators/Commit';
import { AppState, CommitViewMode } from '../actions/AppState';
import { connect } from 'react-redux';
import HistoryView, { HistoryViewDataProps, HistoryViewDispatchProps } from '../components/HistoryView';
import Commit from './Commit';
import ExploreView from './Explore';

export { HistoryViewDataProps, HistoryViewDispatchProps }

const mapStateToProps = (state: AppState): HistoryViewDataProps => {
  const commits = state.commits;
  return {
    commitHash: commits.selectedCommit,
    commits: state.commits.commits,
    diffViewMode: state.commits.viewMode,
    CommitView: Commit,
    ExploreView: ExploreView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCommitClicked: (commit) => {
      dispatch(CommitActions.commitSelected(commit));
    },
    selectDiffViewMode: (mode: CommitViewMode) => {
      dispatch(DiffActions.selectDiffViewMode(mode));
    }
  };
};

export default connect<HistoryViewDataProps, HistoryViewDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(HistoryView);
