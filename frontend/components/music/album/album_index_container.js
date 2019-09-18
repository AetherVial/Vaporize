import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../../actions/album_actions';
import AlbumIndex from "./album_index";

const mapStateToProps = (state, ownProps) => {
    let albums;
    if (ownProps.ParentType === "search") {
        albums = Object.values(state.search.albums)
    } else {
        albums = Object.values(state.entities.albums)
    }
    return {
        albums: albums
    };
}

const mapDispatchToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumIndex));