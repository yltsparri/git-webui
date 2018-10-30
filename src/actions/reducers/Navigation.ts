import { AnyAction } from "redux";
import Actions from "../Actions";
import { Navigation, NavigationNode, NavigationType } from "../AppState";
import { BranchStatus } from "../git/BranchStatus";
import { GitBranch } from "../git/GitBranch";

const mapNodes = (
  branches: GitBranch[],
  parentId: string,
  nodes: { [id: string]: NavigationNode }
) => {
  const parentNode = Object.assign({}, nodes[parentId]);
  const newNodes: { [id: string]: NavigationNode } = Object.assign({}, nodes, {
    [parentNode.id]: parentNode
  });
  branches.forEach(branch => {
    const id = parentNode.id + "_" + branch.name;
    const props: { [key: string]: any } = {};
    if (branch.status === BranchStatus.Current) {
      props.status = "current";
    }
    parentNode.children.push(id);
    newNodes[id] = {
      id,
      parentId: parentNode.id,
      text: branch.name,
      children: [],
      props
    };
  });
  return newNodes;
};

export function Navigation(state: Navigation, action: AnyAction): Navigation {
  switch (action.type) {
    case Actions.SET_LOCAL_BRANCHES:
      return Object.assign({}, state, {
        nodes: mapNodes(
          action.data as GitBranch[],
          NavigationType.LocalBranches,
          state.nodes
        ),
        showAll: null
      });
    case Actions.SET_REMOTE_BRANCHES:
      return Object.assign({}, state, {
        nodes: mapNodes(
          action.data as GitBranch[],
          NavigationType.RemoteBranches,
          state.nodes
        ),
        showAll: null
      });
    case Actions.SET_TAGS:
      return Object.assign({}, state, {
        nodes: mapNodes(
          action.data as GitBranch[],
          NavigationType.Tags,
          state.nodes
        ),
        showAll: null
      });
    case Actions.NODE_SELECTED:
      return Object.assign({}, state, {
        selected: action.data.selected,
        showAll: null
      });
    case Actions.SHOW_ALL:
      return Object.assign({}, state, { showAll: action.data.id });
  }
  return (
    state || {
      rootNodes: [
        NavigationType.Workspace,
        NavigationType.RemoteAccess,
        NavigationType.LocalBranches,
        NavigationType.RemoteBranches,
        NavigationType.Tags
      ],
      nodes: {
        [NavigationType.Workspace]: {
          id: NavigationType.Workspace,
          text: "Workspace",
          children: [],
          parentId: null,
          props: {}
        },
        [NavigationType.RemoteAccess]: {
          id: NavigationType.RemoteAccess,
          text: "Remote",
          children: [],
          parentId: null,
          props: {}
        },
        [NavigationType.LocalBranches]: {
          id: NavigationType.LocalBranches,
          text: "Local Branches",
          children: [],
          parentId: null,
          props: {}
        },
        [NavigationType.RemoteBranches]: {
          id: NavigationType.RemoteBranches,
          text: "Remote Branches",
          children: [],
          parentId: null,
          props: {}
        },
        [NavigationType.Tags]: {
          id: NavigationType.Tags,
          text: "Tags",
          children: [],
          parentId: null,
          props: {}
        }
      },
      showAll: null,
      selected: null
    }
  );
}
