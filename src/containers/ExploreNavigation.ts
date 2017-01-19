import { connect } from 'react-redux';
import { AppState } from '../actions/AppState';
import DiffActions from '../actions/actioncreators/Diff';
import ExploreNavigation, { FilePair, ExploreNavigationProps, ExploreNavigationActions } from '../components/ExploreNavigation';
import Offsets from '../actions/actioncreators/Offsets';

const mapStateToProps = (state: AppState) => {
  const diff = state.commitDiff;
  return {
    files: diff.fileDiffs.map((file, index) => { return { from: file.initialFile, to: file.resultingFile, index }; }),
    commitDetails: diff.headerLines.join('\n'),
    filesOffset: state.offsets['EXPLORE_FILES'],
    selected: diff.selectedFile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fileSelected: (file: FilePair) => {
      dispatch(DiffActions.selectFile(file.index));
      dispatch(Offsets.setOffset('EXPLORE_DIFF', 0, 0));
      dispatch(Offsets.setOffset('EXPLORE_FILES', 0, 0));
  },
    onFilesScroll: (ev: React.UIEvent<HTMLDivElement>) => {
      const target: HTMLDivElement = ev.target as HTMLDivElement;
      dispatch(Offsets.setOffset('EXPLORE_FILES', target.scrollTop, target.scrollLeft));
      console.log(ev);
      console.log(ev.target);
    }
  };
};

export default connect<ExploreNavigationProps, ExploreNavigationActions, any>(
  mapStateToProps,
  mapDispatchToProps
)(ExploreNavigation);
