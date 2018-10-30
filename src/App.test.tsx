import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import {
  AppMode,
  AppState,
  CommitInfo,
  Commits,
  CommitViewMode,
  FileInfo,
  Navigation,
  NavigationNode,
  NavigationType
} from "./actions/AppState";
import { Circle, CommitDiff, DiffOptions, Path } from "./actions/Commit";
import { FileDiff } from "./actions/git/Diff";
import { store } from "./actions/Store";
import { ConnectedApp } from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
  const rootNodes = [
    NavigationType.Workspace,
    NavigationType.RemoteAccess,
    NavigationType.LocalBranches,
    NavigationType.RemoteBranches,
    NavigationType.Tags
  ] as NavigationType[];
  const nodes = {
    [NavigationType.Workspace]: {
      id: NavigationType.Workspace,
      text: "Workspace",
      children: [],
      parentId: "",
      props: {}
    },
    [NavigationType.RemoteAccess]: {
      id: NavigationType.RemoteAccess,
      text: "Remote",
      children: [],
      parentId: "",
      props: {}
    },
    [NavigationType.LocalBranches]: {
      id: NavigationType.LocalBranches,
      text: "Local Branches",
      children: [],
      parentId: "",
      props: {}
    },
    [NavigationType.RemoteBranches]: {
      id: NavigationType.RemoteBranches,
      text: "Remote Branches",
      children: [],
      parentId: "",
      props: {}
    },
    [NavigationType.Tags]: {
      id: NavigationType.Tags,
      text: "Tags",
      children: [],
      parentId: "",
      props: {}
    }
  } as {
    [id: string]: NavigationNode;
  };
  const navigation: Navigation = {
    rootNodes,
    nodes,
    showAll: "",
    selected: ""
  } as Navigation;
  const commits: Commits = {
    commits: new Array<CommitInfo>(),
    selectedCommit: "",
    viewMode: CommitViewMode.Tree,
    graph: { paths: new Array<Path>(), circles: new Array<Circle>() }
  };
  const commitDiff: CommitDiff = {
    fileDiffs: new Array<FileDiff>(),
    selectedFile: 0,
    headerLines: new Array<string>(),
    useSplitDiff: false,
    removedLinesDiff: {} as FileDiff,
    addedLinesDiff: {} as FileDiff
  };
  const state = {
    appData: {
      dirName: "dir",
      viewOnly: true,
      mode: AppMode.History,
      messages: "",
      showAll: "show?"
    },
    navigation,
    commits,
    commitDiff,
    diffOptions: {} as DiffOptions,
    commitTree: {
      path: new Array<FileInfo>(),
      files: new Array<FileInfo>()
    }
  } as AppState;
  const store2 = createStore(
    (s: AppState | undefined) => {
      return s || state;
    },
    state,
    applyMiddleware(
      thunk // lets us dispatch() functions
    )
  ) as Store<AppState, AnyAction>;
  store2.getState();

  const component = create(
    <Provider store={store2}>
      <ConnectedApp />
    </Provider>
  );
  expect(component).toMatchSnapshot();
});
