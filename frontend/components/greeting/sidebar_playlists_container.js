import React from 'react'
import { withRouter } from 'react-router-dom';
import { currentUserPlaylists } from '../../reducers/selectors';
import { connect } from 'react-redux';
import SidebarPlaylists from "./sidebar_playlists";

const mapStateToProps = (state, ownProps) => {
    return({
        playlists: Object.values(currentUserPlaylists(state)),
        currentUserId: state.session.id,
    })
}

const mapDispatchToProps = dispatch => ({
    fetchPlaylists: () => dispatch(fetchPlaylists())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarPlaylists));