import * as PlaylistApiUtils from "../util/playlist_api_util";
export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";

const receiveAllPlaylists = playlists => ({
    type: RECEIVE_ALL_PLAYLISTS,
    playlists
});

const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

const removePlaylist = playlistId => ({
    type: REMOVE_PLAYLIST,
    data: playlistId
});

export const fetchPlaylists = (userId) => dispatch => (
    PlaylistApiUtils.fetchPlaylists(userId).then(playlists => dispatch(receiveAllPlaylists(playlists)))
);

export const fetchPlaylist = id => dispatch => {
    console.log(PlaylistApiUtils.fetchPlaylist(id))
    return PlaylistApiUtils.fetchPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)))
};

export const createPlaylist = playlist => dispatch => (
    PlaylistApiUtils.createPlaylist(playlist).then(playlist => dispatch(receivePlaylist(playlist)))
);

export const updatePlaylist = playlist => dispatch => (
    PlaylistApiUtils.updatePlaylist(playlist)
        .then(playlist => dispatch(receivePlaylist(playlist)))
);

export const deletePlaylist = playlistId => dispatch => (
    PlaylistApiUtils.deletePlaylist(playlistId).then(playlist => dispatch(removePlaylist(playlistId)))
);
