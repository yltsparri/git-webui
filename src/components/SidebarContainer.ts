import { connect } from "react-redux";
import { AnyAction } from "redux";
import { itemSelected, showMore } from "../actions/actioncreators/Navigation";
import { setOffset } from "../actions/actioncreators/Offsets";
import { AppState, NavigationNode } from "../actions/AppState";
import {
  NavNode,
  SidebarView,
  SidebarViewDataProps,
  SidebarViewDispatchProps
} from "./SidebarView";

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
  return {
      id,
      text,
      parentId,
      children: node.children.map(childId => mapNodes(childId, state)),
      props
  };
};

export const SidebarContainer = connect<
  SidebarViewDataProps,
  SidebarViewDispatchProps,
  any
>(
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
        dispatch((itemSelected(item.id) as {}) as AnyAction);
        dispatch(setOffset("EXPLORE_DIFF", 0, 0));
        dispatch(setOffset("EXPLORE_FILES", 0, 0));
      },
      moreClicked: (id: string) => {
        dispatch(showMore(id));
      }
    };
  }
)(SidebarView);
