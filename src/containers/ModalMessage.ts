import ActionCreators from '../actions/ActionCreators';
import {AppState} from '../actions/AppState';
import {connect} from 'react-redux';
import ModalMessage from '../components/ModalMessage';

export default connect<any, any, any>((state: AppState) => {
  return { message: state.baseData.messages };
},
  dispatch => {
    return {
      close: () => dispatch(ActionCreators.closeMessage())
    };
  })(ModalMessage);
