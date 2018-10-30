import * as React from "react";
import { connect } from "react-redux";
import { initState } from "./actions/actioncreators/Init";
import { AppMode, AppState } from "./actions/AppState";
import { ExploreContainer } from "./components/ExploreContainer";
import { HistoryViewContainer } from "./components/HistoryContainer";
import { ModalMessageContainer } from "./components/ModalMessageContainer";
import { RemoteView } from "./components/RemoteView";
import { SidebarContainer } from "./components/SidebarContainer";
import "./css/bootstrap.css";
import "./css/main.css";

interface IndexProps {
  mode: AppMode;
  repo: string;
}

interface DispatchProps {
  init: () => void;
}

export class App extends React.Component<IndexProps & DispatchProps> {
  public componentDidMount() {
    this.props.init();
  }
  public render() {
    return (
      <div className="root">
        <SidebarContainer />
        <div id="main-view">
          <ModalMessageContainer />
          {this.getMainViewContents()}
        </div>
      </div>
    );
  }

  private getMainViewContents = () => {
    switch (this.props.mode) {
      case AppMode.RemoteAccess:
        return <RemoteView repo={this.props.repo} />;
      case AppMode.Workspace:
        return <div />;
      case AppMode.Explore:
        return <ExploreContainer />;
      default:
        return <HistoryViewContainer />;
    }
  }
}

export const ConnectedApp = connect<IndexProps, DispatchProps, {}, AppState>(
  (state: AppState) => {
    return {
      repo: state.appData.dirName,
      mode: state.appData.mode
    };
  },
  dispatch => {
    return {
      init: () => dispatch(initState())
    };
  }
)(App);
