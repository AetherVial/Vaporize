import * as TrackApiUtils from "../util/track_api_utils";
import {receivePlaylist} from "./playlist_actions";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const CLEAR_TRACKS = "CLEAR_TRACKS";
export const RECEIVE_ALL_TRACKS_BY_ARTIST = "RECEIVE_ALL_TRACKS_BY_ARTIST";
export const RECEIVE_ALL_TRACKS_BY_ALBUM = "RECEIVE_ALL_TRACKS_BY_ALBUM";

const receiveAllTracks = tracks => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
});

const receiveTrack = track => ({
    type: RECEIVE_TRACK,
    track
});

export const clearTracks = () => ({
    type: CLEAR_TRACKS
})

export const fetchTrack = id => dispatch => {
    return TrackApiUtils.fetchTrack(id)
        .then(track => dispatch(receiveTrack(track)))
}

export const fetchTracks = (playlistId) => dispatch => (
    TrackApiUtils.fetchTracks(playlistId)
        .then(tracks => dispatch(receiveAllTracks(tracks)))
)

export const fetchTracksByArtist = (artistId) => dispatch => (
    TrackApiUtils.fetchTracksByArtist(artistId)
        .then(tracks => dispatch(receiveAllTracks(tracks)))
)

export const fetchTracksByAlbum = (albumId) => dispatch => (
    TrackApiUtils.fetchTracksByAlbum(albumId)
        .then(tracks => dispatch(receiveAllTracks(tracks)))
)

export const addTrackToPlaylist = (playlistId, trackId) => dispatch => {
    return TrackApiUtils.addTrackToPlaylist(playlistId, trackId)
        .then(track => dispatch(receiveTrack(track)));
};

export const removeTrackFromPlaylist = (playlistId, trackId) => dispatch => {
    return TrackApiUtils.removeTrackFromPlaylist(playlistId, trackId)
        .then(updatedPlaylist => dispatch(receivePlaylist(updatedPlaylist)));
};



