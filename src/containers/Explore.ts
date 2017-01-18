import { FileDiff } from '../actions/git/Diff';
import ExploreView, { ExploreViewStateProps, ExploreViewActions } from '../components/ExploreView';
import { connect } from 'react-redux';
import { AppState } from '../actions/AppState';
import ExploreNavigation from './ExploreNavigation';


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
    onFileSelected: (_file: FileDiff) => {
    },

    onScroll: (ev: React.UIEvent<HTMLDivElement>) => {
      const target: HTMLDivElement = ev.target as HTMLDivElement;
      dispatch({
        type: 'SET_OFFSET',
        key: 'EXPLORE_DIFF',
        offset: {
          top: target.scrollTop,
          left: target.scrollLeft
        }
      });
      console.log(ev);
      console.log(ev.target);
    }
  };
};

export default connect<ExploreViewStateProps, ExploreViewActions, any>(
  mapStateToProps,
  mapDispatchToProps
)(ExploreView);
