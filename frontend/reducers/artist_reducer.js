import {
    RECEIVE_ALL_ARTISTS,
    RECEIVE_ARTIST,
} from "../actions/artist_actions";

export const artistReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            return Object.assign({}, state, action.artist);
        default:
            return state;
    }
}