import React from 'react';
import {withRouter} from "react-router-dom"
import { fetchTrack, removeTrackFromPlaylist, fetchTracks, addTrackToPlaylist } from "../../../actions/track_actions"
import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { selectTracks, currentUserPlaylists } from "../../../reducers/selectors"
import {receiveCurrentTrackList, fetchCurrentTrack} from '../../../actions/queue_actions';

const mapStateToProps = (state, ownProps) => {
    let tracks;
    if (ownProps.ParentType === "search") {
        tracks = Object.values(state.search.tracks)
    } else {
        tracks = (selectTracks(state, ownProps.trackIds))
    }
    return {
        tracks: tracks,
        currentUserPlaylists: currentUserPlaylists(state),
        playlistId: ownProps.playlistId,
        currentUserId: state.session.id
}
}

const mapDispatchToProps = dispatch => ({
    fetchTrack: id => dispatch(fetchTrack(id)),
    fetchTracks: id => dispatch(fetchTracks(id)),
    removeTrackFromPlaylist: (playlistId, id) => dispatch(removeTrackFromPlaylist(playlistId, id)),
    addTrackToPlaylist: (playlistId, id) => dispatch(addTrackToPlaylist(playlistId, id)),
    fetchCurrentTrack: (trackId) => dispatch(fetchCurrentTrack(trackId)),
    receiveCurrentTrackList: (tracks) => dispatch(receiveCurrentTrackList(tracks)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackIndex))
