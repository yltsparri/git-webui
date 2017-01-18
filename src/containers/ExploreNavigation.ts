import { connect } from 'react-redux';
import { AppState } from '../actions/AppState';
import ExploreNavigation, { FilePair, ExploreNavigationProps, ExploreNavigationActions } from '../components/ExploreNavigation';

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
      dispatch({type: 'SELECT_COMMIT_DIFF_FILE', selectedFile: file.index});
  },
    onFilesScroll: (ev: React.UIEvent<HTMLDivElement>) => {
      const target: HTMLDivElement = ev.target as HTMLDivElement;
      dispatch({
        type: 'SET_OFFSET',
        key: 'EXPLORE_FILES',
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

export default connect<ExploreNavigationProps, ExploreNavigationActions, any>(
  mapStateToProps,
  mapDispatchToProps
)(ExploreNavigation);
