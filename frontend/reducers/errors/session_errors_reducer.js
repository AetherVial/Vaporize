

import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_ALL_ERRORS} from "../../actions/session_actions";

let _nullState = {
  errors: []
};

export const sessionErrorsReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullState;
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    case CLEAR_ALL_ERRORS:
      return _nullState;
    default:
      return state;
  }
};