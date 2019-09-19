import * as PlaylistApiUtils from "../util/playlist_api_util";
import * as PlaylistFollowApiUtils from '../util/playlist_follow_api_util';
export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const UNFOLLOW_PLAYLIST = "UNFOLLOW_PLAYLIST";
export const FOLLOW_PLAYLIST = "FOLLOW_PLAYLIST";

const receiveAllPlaylists = playlists => ({
    type: RECEIVE_ALL_PLAYLISTS,
    playlists
});

export const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

export const unfollowPlaylist = playlist => ({
    type: UNFOLLOW_PLAYLIST,
    playlist
});
export const followPlaylist = playlist => ({
    type: FOLLOW_PLAYLIST,
    playlist
});

const removePlaylist = id => ({
    type: REMOVE_PLAYLIST,
    data: id
});

export const fetchPlaylists = (userId) => dispatch => (
    PlaylistApiUtils.fetchPlaylists(userId).then(playlists => dispatch(receiveAllPlaylists(playlists)))
);

export const fetchPlaylist = id => dispatch => {
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

export const createPlaylistFollow = (playlistId, userId) => dispatch => {
    return PlaylistFollowApiUtils.createPlaylistFollow(playlistId, userId)
        .then(playlist => dispatch(followPlaylist(playlist)));
};

export const deletePlaylistFollow = (playlistId, userId) => dispatch => {
    return PlaylistFollowApiUtils.deletePlaylistFollow(playlistId, userId)
        .then(playlist => dispatch(unfollowPlaylist(playlist)));
};
