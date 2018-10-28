import { connect } from "react-redux";
import { Dispatch } from "redux";
import Offsets from "../actions/actioncreators/Offsets";
import { AppState } from "../actions/AppState";
import ExploreView, {
  ExploreViewActions,
  ExploreViewStateProps
} from "../components/ExploreView";
import ExploreNavigation from "./ExploreNavigation";

const mapStateToProps = (state: AppState) => {
  return {
    removedLinesDiff: state.commitDiff.removedLinesDiff,
    addedLinesDiff: state.commitDiff.addedLinesDiff,
    position: state.offsets.get("EXPLORE_DIFF")!,
    ExploreNavigation
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onScroll: (ev: React.UIEvent<HTMLDivElement>) => {
      const target: HTMLDivElement = ev.target as HTMLDivElement;
      dispatch(
        Offsets.setOffset("EXPLORE_DIFF", target.scrollTop, target.scrollLeft)
      );
    }
  };
};

export default connect<ExploreViewStateProps, ExploreViewActions, any>(
  mapStateToProps,
  mapDispatchToProps
)(ExploreView);
