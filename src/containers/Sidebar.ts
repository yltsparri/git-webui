import SidebarView, { SidebarViewDataProps, SidebarViewDispatchProps, SelectedItem } from '../components/SidebarView';
import ActionCreators from '../actions/ActionCreators';
import { AppState } from '../actions/AppState';
import { connect } from 'react-redux';

export default connect<SidebarViewDataProps, SidebarViewDispatchProps, any>(
  (state: AppState) => {
    return {
      dirName: state.baseData.dirName,
      viewOnly: state.baseData.viewOnly,
      localBranches: state.localBranches,
      remoteBrances: state.remoteBrances,
      tags: state.tags,
      selectedItem: state.baseData.selectedItem,
      mode: state.baseData.mode
    };
  }, (dispatch): SidebarViewDispatchProps => {
    return {
      onItemClicked: (b: SelectedItem) => {
        dispatch(ActionCreators.itemSelected(b));
      }
    };
  })(SidebarView);
