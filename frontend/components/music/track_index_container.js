import React from 'react';
import {withRouter} from "react-router-dom"
import { fetchTrack, clearTracks, fetchPlaylistTracks } from "../../actions/track_actions"
import { connect } from 'react-redux';
import TrackIndex from './track_index';

const mapStateToProps = (state, ownProps) => {
   return {tracks: state.entities.tracks}
}

const mapDispatchToProps = dispatch => ({
    fetchTrack: id => dispatch(fetchTrack(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackIndex))
