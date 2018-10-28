import * as React from "react";
import { connect } from "react-redux";
import { AppMode, AppState } from "./actions/AppState";
import RemoteView from "./components/RemoteView";
import Explore from "./containers/Explore";
import HistoryView from "./containers/History";
import ModalMessage from "./containers/ModalMessage";
import Sidebar from "./containers/Sidebar";
import "./css/bootstrap.css";
import "./css/main.css";

interface IndexProps {
  mode: AppMode;
  repo: string;
}

export class App extends React.Component<IndexProps> {
  public render() {
    return (
      <div className="root">
        <Sidebar />
        <div id="main-view">
          <ModalMessage />
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
        return <Explore />;
      default:
        return <HistoryView />;
    }
  }
}

const ConnectedApp = connect<IndexProps, {}, {}, AppState>(
  (state: AppState) => {
    return {
      repo: state.appData.dirName,
      mode: state.appData.mode
    };
  }
)(App);

export default ConnectedApp;
