import React from 'react';
import {fetchTrack} from "../../actions/track_actions";
import {fetchAlbum} from "../../actions/album_actions";
import {fetchPlaylist} from "../../actions/playlist_actions";
import {fetchArtist} from "../../actions/artist_actions";
import { connect } from 'react-redux';
import TrackIndexItem from "../music/track/track_index_item"

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        let trackList;
        let artistList;
        let albumList;
        let playlistList;
        if (Object.keys(this.props.search).length === 0) {
            return (
                <div className="search-fail">
                    <h1>Search Vaporize</h1>
                    <h5>Find some of my favorite songs, albums, and artists.</h5>
                </div>
            ) 
        } else {
            if (this.props.tracks) {
                trackList = Object.values(this.props.tracks).map(track => {
                    return (<div key={Math.random()}>
                        <TrackIndexItem 
                        track={track} 
                        fetchCurrentTrack = {this.props.fetchCurrentTrack}/><br/></div>)
                })
            }
            if (this.props.artists) {
                artistList = Object.values(this.props.artists).map(artist => {
                    return (<div key={Math.random()}>{artist.name}<br /></div>)
                })
            }
            if (this.props.albums) {
                albumList = Object.values(this.props.albums).map(album => {
                    return (<div key={Math.random()}>{album.title}<br /></div>)
                })
            }
            if (this.props.playlists) {
                playlistList = Object.values(this.props.playlists).map(playlist => {
                    return (<div key={Math.random()}>{playlist.title}<br /></div>)
                })
            }
        }
        
        return (   
            <div>
                <h1>Matched Songs:</h1>
                <ul>
                    {trackList}
                </ul>
                <h1>Matched Artists:</h1>
                <ul>
                    {artistList}
                </ul>
                <h1>Matched Albums:</h1>
                <ul>
                    {albumList}
                </ul>
                <h1>Matched Playlists:</h1>
                <ul>
                    {playlistList}
                </ul>
            </div>
        )
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