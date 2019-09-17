import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylists } from '../../../actions/playlist_actions';
import {currentUserPlaylists} from "../../../reducers/selectors";
import PlaylistIndex from "./playlist_index";

const mapStateToProps = (state, ownProps) => {
    return {
        playlists: Object.values(currentUserPlaylists(state))
    };
}

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex));