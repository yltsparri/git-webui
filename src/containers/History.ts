import ActionCreators from '../actions/ActionCreators';
import { AppState, CommitViewMode } from '../actions/AppState';
import { connect } from 'react-redux';
import HistoryView, { HistoryViewDataProps, HistoryViewDispatchProps } from '../components/HistoryView';
import Commit from './Commit';

export { HistoryViewDataProps, HistoryViewDispatchProps }

const mapStateToProps = (state: AppState) => {
  const options = state.historyViewOptions;
  return {
    commitHash: options.commitHash,
    diff: options.diff,
    commits: state.commits,
    diffViewMode: options.diffViewMode,
    CommitView: Commit
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCommitClicked: (commit) => {
      dispatch(ActionCreators.commitSelected(commit));
    },
    selectDiffViewMode: (mode: CommitViewMode) => {
      dispatch(ActionCreators.selectDiffViewMode(mode));
    }
  };
};

export default connect<HistoryViewDataProps, HistoryViewDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(HistoryView);
