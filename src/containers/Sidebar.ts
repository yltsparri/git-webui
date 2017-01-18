import SidebarView, { SidebarViewDataProps, SidebarViewDispatchProps } from '../components/SidebarView';
import ActionCreators from '../actions/ActionCreators';
import { AppState, SelectedItem } from '../actions/AppState';
import { connect } from 'react-redux';

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
        dispatch(ActionCreators.itemSelected(b));
      }
    };
  })(SidebarView);
