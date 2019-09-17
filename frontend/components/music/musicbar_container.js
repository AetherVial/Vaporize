import React from "react";
import {fetchCurrentTrack, togglePlay, goNext} from '../../actions/queue_actions';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MusicBar from './musicbar';

const mapStateToProps = state => {
    return {
        currentlyPlaying: state.ui.queue.currentlyPlaying,
        playing: state.ui.queue.playing,
        queue: state.ui.queue
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentTrack: id => dispatch(fetchCurrentTrack(id)),
  togglePlay: (bool) => dispatch(togglePlay(bool)),
  goNext: () => dispatch(goNext())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MusicBar))