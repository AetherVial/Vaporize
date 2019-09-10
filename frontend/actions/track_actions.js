import * as TrackApiUtils from "../util/track_api_utils";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";

const receiveAllTracks = tracks => ({
    type: RECEIVE_ALL_TRACKS,
    tracks
});

const receiveTrack = track => ({
    type: RECEIVE_Track,
    track
});

export const fetchTrack = id => dispatch => (
    TrackApiUtils.fetchTrack(id)
        .then(track => dispatch(receiveTrack(track)))
)

export const fetchTracks = () => dispatch => (
    TrackApiUtils.fetchTracks()
        .then(tracks => dispatch(receiveAllTracks(tracks)))
)
