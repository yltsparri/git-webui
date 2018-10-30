import { connect } from "react-redux";
import { Dispatch } from "redux";
import { closeMessage } from "../actions/actioncreators/Messages";
import { AppState } from "../actions/AppState";
import { ModalMessage } from "./ModalMessage";

export const ModalMessageContainer = connect<any, any, any>(
  (state: AppState) => {
    return { message: state.appData.messages };
  },
  (dispatch: Dispatch) => {
    return {
      close: () => dispatch(closeMessage())
    };
  }
)(ModalMessage);
