import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchArtists, clearArtists } from '../../../actions/artist_actions';
import ArtistIndex from "./artist_index";

const mapStateToProps = (state, ownProps) => {
    let artists;
    if (ownProps.ParentType === "search") {
        artists = Object.values(state.search.artists)
    } else {
        artists = Object.values(state.entities.artists)
    }
    return {
        artists: artists
    };
}

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
    clearArtists: () => dispatch(clearArtists())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArtistIndex));