import {
    NEXT_TRACK,
    PREV_TRACK,
    TOGGLE_PLAY,
    RECEIVE_CURRENT_TRACK,
    RECEIVE_CURRENT_TRACK_LIST,
    GO_NEXT
} from "../../actions/queue_actions";

let _nullState = {
    currentlyPlaying: null,
    queue: [],
    tracks: {},
    trackList: [],
    prevTracks: [],
    playing: false,
    shuffle: false
}

const queueReducer = (state = _nullState, action) => {
    Object.freeze(state)
    let nextTrackId;
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_TRACK:
            newState.currentlyPlaying = action.track;
            newState.prevTracks.push(action.track.id)
            newState.playing = true;
            return newState;
        case RECEIVE_CURRENT_TRACK_LIST:
            newState.queue = action.tracks;
            return newState;
        case NEXT_TRACK:
            nextTrackId = newState.queue.shift();
            newState.prevTracks.push(nextTrackId)
            newState.currentlyPlaying = newState.tracks[nextTrackId];
        case TOGGLE_PLAY:
            newState.playing = !newState.playing;
            return newState;
        case GO_NEXT:
            newState.queue.push(newState.queue.shift())
            return newState;
        default:
            return state;
    }
}

export default queueReducer;



