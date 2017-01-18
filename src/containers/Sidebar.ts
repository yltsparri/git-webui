import SidebarView, { SidebarViewDataProps, SidebarViewDispatchProps } from '../components/SidebarView';
import { AppState, SelectedItem } from '../actions/AppState';
import { connect } from 'react-redux';
import NavigationActions from '../actions/actioncreators/Navigation';

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
      }
    };
  })(SidebarView);
