import { connect } from "react-redux";
import { Dispatch } from "redux";
import Messages from "../actions/actioncreators/Messages";
import { AppState } from "../actions/AppState";
import ModalMessage from "../components/ModalMessage";

export default connect<any, any, any>(
  (state: AppState) => {
    return { message: state.appData.messages };
  },
  (dispatch: Dispatch) => {
    return {
      close: () => dispatch(Messages.closeMessage())
    };
  }
)(ModalMessage);
