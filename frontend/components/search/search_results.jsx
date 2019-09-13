import React from 'react';
import {fetchTrack} from "../../actions/track_actions";
import {fetchAlbum} from "../../actions/album_actions";
import {fetchPlaylist} from "../../actions/playlist_actions";
import {fetchArtist} from "../../actions/artist_actions";
import { connect } from 'react-redux';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (Object.keys(this.props.search).length === 0) {
            return (
                <div>No results</div>
            ) 
        } else {
            return (
                <div>yay!</div>
            )
        }
    }
}

const mapStateToProps = state => ({
    search: state.search,
    albums: state.search.albums,
    artists: state.search.artists,
    playlists: state.search.playlists,
    tracks: state.search.tracks
})

const mapDispatchToProps = dispatch => ({
    fetchAlbum: id => fetchAlbum(id),
    fetchArtist: id => fetchArtist(id),
    fetchPlaylist: id => fetchPlaylist(id),
    fetchTrack: id => fetchTrack(id)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)