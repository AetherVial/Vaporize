import * as TrackApiUtil from '../util/track_api_utils';

export const NEXT_TRACK = 'NEXT_TRACK'
export const PREV_TRACK = 'PREV_TRACK'
export const TOGGLE_PLAY = 'TOGGLEPLAY'
export const RECEIVE_CURRENT_TRACK = "RECEIVE_CURRENT_TRACK"
export const RECEIVE_CURRENT_TRACK_LIST = "RECEIVE_CURRENT_TRACK_LIST"

export const receiveCurrentTrackList = (tracks) => ({
        type: RECEIVE_CURRENT_TRACK_LIST,
        tracks
})

export const receiveCurrentTrack = track => ({
    type: RECEIVE_CURRENT_TRACK,
    track
})

export const togglePlay = (boolean) => {
    return {
        type: TOGGLE_PLAY,
        boolean
    }
}

export const fetchCurrentTrack = (trackId) => dispatch => {
    return TrackApiUtil.fetchTrack(trackId)
        .then(currentTrack => dispatch(receiveCurrentTrack(currentTrack)));
};