import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Init from "./actions/actioncreators/Init";
import store from "./actions/Store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

store.dispatch(Init.initState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("global-container") as HTMLElement
);
registerServiceWorker();
