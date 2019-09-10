import React from 'react'
import {connect} from 'react-redux';
import {createPlaylist} from '../../actions/playlist_actions'
import {withRouter} from 'react-router-dom';
import PlaylistForm from './playlist_form'


const mapStateToProps = (state, ownProps) => {
    const playlist = {title: ''};
    const formType = 'New Playlist';
    return {playlist, formType};
}

const mapDispatchToProps = dispatch => ({
    action: playlist => dispatch(createPlaylist(playlist))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistForm);



