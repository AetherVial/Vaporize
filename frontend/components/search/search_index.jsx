import React from 'react';
import { connect } from 'react-redux';
import TrackIndexContainer from '../music/track/track_index_container';
import {Link} from 'react-router-dom';

const mstp = (state) => ({
    search: state.search,
    albums: state.search.albums,
    artists: state.search.artists,
    playlists: state.search.playlists,
    tracks: state.search.tracks
})

class SearchIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let trackList;
        let artistList;
        let albumList;
        let playlistList;
        if (this.props.search.tracks) {
            trackList = <TrackIndexContainer ParentType="search" trackIds={Object.keys(this.props.search.tracks).map(el => parseInt(el))} />
        }
        if (this.props.artists) {
            artistList = Object.values(this.props.artists).map((artist, idx) => {
                return (
                    <Link key={artist.name + idx} to={`/artists/${artist.id}`} className="albumIndexItem">
                        <img className="artist-art-index" src={artist.photoUrl} />
                            {artist.name}
                    </Link>
                )
            })
        }
        if (this.props.albums) {
            albumList = Object.values(this.props.albums).map((album, idx) => {
                return (
                    <Link key={album.title + idx} to={`/albums/${album.id}`} className="albumIndexItem">
                        <img className="album-art-index" src={album.photoUrl} />
                        {album.title}
                    </Link>
                )
            })
        }
        if (this.props.playlists) {
            playlistList = Object.values(this.props.playlists).map((playlist, idx) => {
                return (
                    <Link key={playlist.title + idx} to={`/playlists/${playlist.id}`} className="albumIndexItem">
                        <img className="album-art-index" src={window.Yacht} />
                        {playlist.title}
                    </Link>)
            })
        }
        return(
            <div className="search-index">
                <h2>Matched Songs:</h2>
                {trackList}
                <br />
                <h2 >Matched Artists:</h2>
                <br />
                <ul className="search-list">{artistList}</ul>
                <br />
                <h2>Matched Albums:</h2>
                <br />
                <ul className="search-list">
                    {albumList}
                </ul>
                <h2>Matched Playlists:</h2>
                <br />
                <ul className="search-list">
                    {playlistList}
                </ul>
            </div>
        )
    }
}

export default connect(mstp)(SearchIndex);