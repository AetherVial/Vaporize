import {
    NEXT_TRACK,
    PREV_TRACK,
    TOGGLE_PLAY,
    RECEIVE_CURRENT_TRACK,
    RECEIVE_CURRENT_TRACK_LIST
} from "../../actions/queue_actions";

let _nullState = {
    currentlyPlaying: null,
    queue: [],
    tracks: {},
    trackList: [],
    prevTracks: [],
    playing: false
}

const findTrackIndex = (trackList, trackId) => {
    for (let i = 0; i < trackList.length; i++) {
        if (trackList[i] === `${trackId}`)
            return i;
    }
    return -1;
};

const makeQueue = (index, array) => {

}

const queueReducer = (state = _nullState, action) => {
    Object.freeze(state)
    let nextTrackId;
    //let trackIndex;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            newState.currentlyPlaying = action.track;
            newState.playing = true;
            return newState;
        case RECEIVE_CURRENT_TRACK_LIST:
            newState.tracks = action.tracks;
            return newState;
        case NEXT_TRACK:
            nextTrackId = newState.queue.shift();
            newState.currentlyPlaying = newState.tracks[nextTrackId];
        default:
            return _nullState;
    }
}

export default queueReducer;



