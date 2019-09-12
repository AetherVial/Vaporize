import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbums, clearAlbums } from '../../../actions/album_actions';
import AlbumIndex from "./album_index";

const mapStateToProps = (state, ownProps) => {
    return {
        albums: Object.values(state.entities.albums)
    };
}

const mapDispatchToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
    clearAlbums: () => dispatch(clearAlbums())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumIndex));