import {
    RECEIVE_ALL_ALBUMS,
    RECEIVE_ALBUM,
} from "../../actions/album_actions";

export const albumReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            return action.albums;
        case RECEIVE_ALBUM:
            return Object.assign({}, state, action.album);
        default:
            return state;
    }
}