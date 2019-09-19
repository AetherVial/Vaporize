import React from 'react'
import { withRouter } from 'react-router-dom';
import { currentUserPlaylists, userFollowedPlaylists } from '../../reducers/selectors';
import { connect } from 'react-redux';
import {fetchPlaylists} from '../../actions/playlist_actions';
import SidebarPlaylists from "./sidebar_playlists";

const mapStateToProps = (state, ownProps) => {
    return ({
        playlists: Object.values(currentUserPlaylists(state)).concat(userFollowedPlaylists(state)),
        // userFollowedPlaylists: userFollowedPlaylists(state),
        currentUserId: state.session.id,
    })
}

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarPlaylists));