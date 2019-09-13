import React from 'react';
import {withRouter} from "react-router-dom"
import { fetchTrack, removeTrackFromPlaylist, fetchTracks } from "../../../actions/track_actions"
import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { selectTracks, currentUserPlaylists } from "../../../reducers/selectors"
import { addTrackToPlaylist } from '../../../util/track_api_utils';

const mapStateToProps = (state, ownProps) => {
   return {
        tracks: selectTracks(state, ownProps.trackIds),
        playlistId: ownProps.playlistId,
        currentUserPlaylists: currentUserPlaylists(state)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchTrack: id => dispatch(fetchTrack(id)),
    fetchTracks: id => dispatch(fetchTracks(id)),
    removeTrackFromPlaylist: (playlistId, id) => dispatch(removeTrackFromPlaylist(playlistId, id)),
    addTrackToPlaylist: (playlistId, id) => dispatch(addTrackToPlaylist(playlistId, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackIndex))
