import {
    RECEIVE_ALL_TRACKS,
    RECEIVE_TRACK,
} from "../actions/track_actions";

export const trackReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return action.tracks;
        case RECEIVE_TRACK:
            return Object.assign({}, state, action.track);
        default:
            return state;
    }
}