import { connect } from "react-redux";
import { AnyAction } from "redux";
import NavigationActions from "../actions/actioncreators/Navigation";
import Offsets from "../actions/actioncreators/Offsets";
import { AppState, NavigationNode } from "../actions/AppState";
import SidebarView, {
  NavNode,
  SidebarViewDataProps,
  SidebarViewDispatchProps
} from "../components/SidebarView";

const mapNodes = (
  nodeId: string,
  state: { [id: string]: NavigationNode }
): NavNode => {
  const node = state[nodeId];
  const { id, text, parentId } = node;
  const props = {};
  Object.keys(node.props).forEach(key => {
    props["data-" + key] = node.props[key];
  });
  return Object.assign(
    {},
    {
      id,
      text,
      parentId,
      children: node.children.map(childId => mapNodes(childId, state)),
      props
    }
  );
};

export default connect<SidebarViewDataProps, SidebarViewDispatchProps, any>(
  (state: AppState) => {
    return {
      dirName: state.appData.dirName,
      viewOnly: state.appData.viewOnly,
      nodes: state.navigation.rootNodes.map(nodeId =>
        mapNodes(nodeId, state.navigation.nodes)
      ),
      selectedItem: state.navigation.selected,
      showAll: state.navigation.showAll
    } as SidebarViewDataProps;
  },
  (dispatch): SidebarViewDispatchProps => {
    return {
      onItemClicked: (item: NavNode) => {
        dispatch((NavigationActions.itemSelected(item.id) as {}) as AnyAction);
        dispatch(Offsets.setOffset("EXPLORE_DIFF", 0, 0));
        dispatch(Offsets.setOffset("EXPLORE_FILES", 0, 0));
      },
      moreClicked: (id: string) => {
        dispatch(NavigationActions.showMore(id));
      }
    };
  }
)(SidebarView);
