import SidebarView, { SidebarViewDataProps, SidebarViewDispatchProps } from '../components/SidebarView';
import { AppState, SelectedItem } from '../actions/AppState';
import { connect } from 'react-redux';
import NavigationActions from '../actions/actioncreators/Navigation';
import Offsets from '../actions/actioncreators/Offsets';

export default connect<SidebarViewDataProps, SidebarViewDispatchProps, any>(
  (state: AppState) => {
    return {
      dirName: state.baseData.dirName,
      viewOnly: state.baseData.viewOnly,
      localBranches: state.localBranches,
      remoteBrances: state.remoteBrances,
      tags: state.tags,
      mode: state.baseData.selectedItem.type,
      selectedItem: state.baseData.selectedItem.name
    };
  }, (dispatch): SidebarViewDispatchProps => {
    return {
      onItemClicked: (b: SelectedItem) => {
        dispatch(NavigationActions.itemSelected(b));

      dispatch(Offsets.setOffset('EXPLORE_DIFF', 0, 0));
      dispatch(Offsets.setOffset('EXPLORE_FILES', 0, 0));
      }
    };
  })(SidebarView);
