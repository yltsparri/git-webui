import { connect } from "react-redux";
import { Dispatch } from "redux";
import DiffActions from "../actions/actioncreators/Diff";
import Offsets from "../actions/actioncreators/Offsets";
import { AppState } from "../actions/AppState";
import ExploreNavigation, {
  ExploreNavigationActions,
  ExploreNavigationProps,
  FilePair
} from "../components/ExploreNavigation";

const mapStateToProps = (state: AppState) => {
  const diff = state.commitDiff;
  return {
    files: diff.fileDiffs.map((file, index) => {
      return { from: file.initialFile, to: file.resultingFile, index };
    }),
    commitDetails: diff.headerLines.join("\n"),
    filesOffset: state.offsets.get("EXPLORE_DIFF")!,
    selected: diff.selectedFile
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fileSelected: (file: FilePair) => {
      dispatch(DiffActions.selectFile(file.index));
      dispatch(Offsets.setOffset("EXPLORE_DIFF", 0, 0));
      dispatch(Offsets.setOffset("EXPLORE_FILES", 0, 0));
    },
    onFilesScroll: (ev: React.UIEvent<HTMLDivElement>) => {
      const target: HTMLDivElement = ev.target as HTMLDivElement;
      dispatch(
        Offsets.setOffset("EXPLORE_FILES", target.scrollTop, target.scrollLeft)
      );
    }
  };
};

export default connect<ExploreNavigationProps, ExploreNavigationActions, any>(
  mapStateToProps,
  mapDispatchToProps
)(ExploreNavigation);
