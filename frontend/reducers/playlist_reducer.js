import {
    RECEIVE_ALL_PLAYLISTS,
    RECEIVE_PLAYLIST,
    REMOVE_PLAYLIST
} from "../actions/playlist_actions";

export const playlistReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
            return Object.assign({}, state, action.playlist);
        case REMOVE_PLAYLIST:
            let newState = Object.assign({}, state);
            delete newState[action.playlist.id];
            return newState;
        default:
            return state;
    }
}