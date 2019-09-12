import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ARTIST,
    CLEAR_ARTISTS
} from "../../actions/artist_actions";

let _nullState = {}

export const artistReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.artist);
        case CLEAR_ARTISTS:
            return _nullState;
        default:
            return state;
    }
}