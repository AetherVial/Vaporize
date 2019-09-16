import React from "react";
import {fetchCurrentTrack} from '../../actions/queue_actions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MusicBar from './musicbar';

const mapStateToProps = state => {
    return {
        currentlyPlaying: state.ui.queue.currentlyPlaying,
        playing: state.ui.queue.playing
        // playing: playing,
        // prevTracks: prevTracks,
        // queue: queue,
        // trackList: trackList,
        // tracks: tracks
    }
}

const mapDispatchToProps = (dispatch) => ({
  //  fetchCurrentTrack: id => dispatch(fetchCurrentTrack(id)),
})

export default withRouter(connect(mapStateToProps)(MusicBar))