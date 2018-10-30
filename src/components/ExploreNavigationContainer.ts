import { connect } from "react-redux";
import { Dispatch } from "redux";
import { selectFile } from "../actions/actioncreators/Diff";
import { setOffset } from "../actions/actioncreators/Offsets";
import { AppState } from "../actions/AppState";
import {
  ExploreNavigation,
  ExploreNavigationActions,
  ExploreNavigationProps,
  FilePair
} from "./ExploreNavigation";

const mapStateToProps = (state: AppState) => {
  const diff = state.commitDiff;
  return {
    files: diff.fileDiffs.map((file, index) => {
      return { from: file.initialFile, to: file.resultingFile, index };
    }),
    commitDetails: diff.headerLines.join("\n"),
    filesOffset: state.offsets.EXPLORE_FILES!,
    selected: diff.selectedFile
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fileSelected: (file: FilePair) => {
      dispatch(selectFile(file.index));
      dispatch(setOffset("EXPLORE_DIFF", 0, 0));
      dispatch(setOffset("EXPLORE_FILES", 0, 0));
    },
    onFilesScroll: (ev: React.UIEvent<HTMLDivElement>) => {
      const target: HTMLDivElement = ev.target as HTMLDivElement;
      dispatch(setOffset("EXPLORE_FILES", target.scrollTop, target.scrollLeft));
    }
  };
};

export const ExploreNavigationContainer = connect<
  ExploreNavigationProps,
  ExploreNavigationActions,
  any
>(
  mapStateToProps,
  mapDispatchToProps
)(ExploreNavigation);
