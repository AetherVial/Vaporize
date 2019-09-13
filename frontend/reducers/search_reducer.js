import { RECEIVE_SEARCH, CLEAR_SEARCH } from '../actions/search_actions';

let _nullState = {};

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH:
            return action.payload
        case CLEAR_SEARCH:
            return _nullState
        default:
            return state;
    }
}

export default searchReducer;