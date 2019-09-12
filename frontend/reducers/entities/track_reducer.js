import {
    RECEIVE_ALL_TRACKS,
    RECEIVE_TRACK,
    CLEAR_TRACKS,
} from "../../actions/track_actions";
import { RECEIVE_PLAYLIST } from "../../actions/playlist_actions";

let _nullState = {};


export const trackReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_TRACKS:
            return action.tracks;
        case RECEIVE_TRACK:
            return Object.assign({}, state, action.track);
        case CLEAR_TRACKS:
            return _nullState;
        default:
            return state;
    }
}