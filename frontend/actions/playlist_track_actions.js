import * as PlaylistTrackApiUtils from "../util/playlist_track_api_util";
export const RECEIVE_ALL_PLAYLIST_TRACKS = "RECEIVE_ALL_PLAYLIST_TRACKS";
export const RECEIVE_PLAYLIST_TRACK = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST_TRACK = "REMOVE_PLAYLIST_TRACK";

const receiveAllPlaylistTracks = playlist_tracks => ({
    type: RECEIVE_ALL_PLAYLIST_TRACKS,
    playlist_tracks
});

const receivePlaylistTrack = playlist_track => ({
    type: RECEIVE_PLAYLIST_TRACK,
    playlist_track
});

const removePlaylistTrack = id => ({
    type: REMOVE_PLAYLIST_TRACK,
    data: id
});

export const fetchPlaylistTracks = (playlistId) => dispatch => (
    PlaylistTrackApiUtils.fetchPlaylists(playlistId).then(playlist_tracks => dispatch(receiveAllPlaylistTracks(playlist_tracks)))
);

export const fetchPlaylistTrack = id => dispatch => {
    return PlaylistTrackApiUtils.fetchPlaylistTrack(id).then(playlist_track => dispatch(receivePlaylistTrack(playlist_track)))
};

export const createPlaylistTrack = playlist_track => dispatch => (
    PlaylistTrackApiUtils.createPlaylist(playlist_track).then(playlist_track => dispatch(receivePlaylistTrack(playlist_track)))
);

export const deletePlaylist = playlist_trackId => dispatch => (
    PlaylistApiUtils.deletePlaylist(playlist_trackId).then(playlist_track => dispatch(removePlaylistTrack(playlist_trackId)))
);
