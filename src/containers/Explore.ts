import ExploreView, { ExploreViewStateProps, ExploreViewActions } from '../components/ExploreView';
import { connect } from 'react-redux';
import { AppState } from '../actions/AppState';
import ExploreNavigation from './ExploreNavigation';
import Offsets from '../actions/actioncreators/Offsets';

const mapStateToProps = (state: AppState) => {
  return {
    removedLinesDiff: state.commitDiff.removedLinesDiff,
    addedLinesDiff: state.commitDiff.addedLinesDiff,
    position: state.offsets['EXPLORE_DIFF'],
    ExploreNavigation: ExploreNavigation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onScroll: (ev: React.UIEvent<HTMLDivElement>) => {
      const target: HTMLDivElement = ev.target as HTMLDivElement;
      dispatch(Offsets.setOffset('EXPLORE_DIFF', target.scrollTop, target.scrollLeft));
    }
  };
};

export default connect<ExploreViewStateProps, ExploreViewActions, any>(
  mapStateToProps,
  mapDispatchToProps
)(ExploreView);
