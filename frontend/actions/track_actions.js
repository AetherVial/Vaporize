import * as TrackApiUtils from "../util/track_api_utils";
export const RECEIVE_ALL_TRACKS = "RECEIVE_ALL_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const CLEAR_TRACKS = "CLEAR_TRACKS"

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



