import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import CommitActions from "../actions/actioncreators/Commit";
import DiffActions from "../actions/actioncreators/Diff";
import { AppState, CommitInfo, CommitViewMode } from "../actions/AppState";
import HistoryView, {
  HistoryViewDataProps,
  HistoryViewDispatchProps
} from "../components/HistoryView";
import Commit from "./Commit";
import ExploreView from "./Explore";

export { HistoryViewDataProps, HistoryViewDispatchProps };

const mapStateToProps = (state: AppState): HistoryViewDataProps => {
  const commits = state.commits;
  return {
    commitHash: commits.selectedCommit,
    commits: state.commits.commits,
    diffViewMode: state.commits.viewMode,
    CommitView: Commit,
    graph: state.commits.graph,
    ExploreView
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onCommitClicked: (commit: CommitInfo) => {
      dispatch((CommitActions.commitSelected(commit) as {}) as AnyAction);
    },
    selectDiffViewMode: (mode: CommitViewMode) => {
      dispatch((DiffActions.selectDiffViewMode(mode) as {}) as AnyAction);
    }
  };
};

export default connect<HistoryViewDataProps, HistoryViewDispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(HistoryView);
