import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setOffset } from "../actions/actioncreators/Offsets";
import { AppState } from "../actions/AppState";
import { ExploreNavigationContainer } from "./ExploreNavigationContainer";
import {
  ExploreView,
  ExploreViewActions,
  ExploreViewStateProps
} from "./ExploreView";

const mapStateToProps = (state: AppState) => {
  return {
    removedLinesDiff: state.commitDiff.removedLinesDiff,
    addedLinesDiff: state.commitDiff.addedLinesDiff,

    position: state.offsets.EXPLORE_DIFF!,
    ExploreNavigation: ExploreNavigationContainer
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onScroll: (ev: React.UIEvent<HTMLDivElement>) => {
      const target: HTMLDivElement = ev.target as HTMLDivElement;
      ev.stopPropagation();
      dispatch(setOffset("EXPLORE_DIFF", target.scrollTop, target.scrollLeft));
    }
  };
};

export const ExploreContainer = connect<
  ExploreViewStateProps,
  ExploreViewActions,
  any
>(
  mapStateToProps,
  mapDispatchToProps
)(ExploreView);
