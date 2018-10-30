import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { commitSelected } from "../actions/actioncreators/Commit";
import { selectDiffViewMode } from "../actions/actioncreators/Diff";
import { AppState, CommitInfo, CommitViewMode } from "../actions/AppState";
import { CommitContainer } from "./CommitContainer";
import { ExploreContainer } from "./ExploreContainer";
import {
  HistoryView,
  HistoryViewDataProps,
  HistoryViewDispatchProps
} from "./HistoryView";

export { HistoryViewDataProps, HistoryViewDispatchProps };

const mapStateToProps = (state: AppState): HistoryViewDataProps => {
  const commits = state.commits;
  return {
    commitHash: commits.selectedCommit,
    commits: state.commits.commits,
    diffViewMode: state.commits.viewMode,
    CommitView: CommitContainer,
    graph: state.commits.graph,
    Explore: ExploreContainer
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onCommitClicked: (commit: CommitInfo) => {
      dispatch((commitSelected(commit) as {}) as AnyAction);
    },
    selectDiffViewMode: (mode: CommitViewMode) => {
      dispatch((selectDiffViewMode(mode) as {}) as AnyAction);
    }
  };
};

export const HistoryViewContainer = connect<
  HistoryViewDataProps,
  HistoryViewDispatchProps,
  any
>(
  mapStateToProps,
  mapDispatchToProps
)(HistoryView);
