import React from 'react';
import {fetchTrack} from "../../actions/track_actions";
import {fetchAlbum} from "../../actions/album_actions";
import {fetchPlaylist} from "../../actions/playlist_actions";
import {fetchArtist} from "../../actions/artist_actions";
import { connect } from 'react-redux';
import {Link, NavLink, Route} from 'react-router-dom';
import AlbumSearchIndexContainer from './search_albums';
import ArtistIndexContainer from '../music/artist/artist_index_container';
import PlaylistIndexContainer from '../music/playlist/playlist_index_container';
import SearchIndexContainer from './search_index';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        if (Object.keys(this.props.search).length === 0) {
            return (
                <div className="search-fail">
                    <h1>Search Vaporize</h1>
                    <h5>Find some of my favorite songs, albums, and artists.</h5>
                </div>
            )
        } else {
        return (   
            <div class="search-results">
                
                <div className='search-tabs-container'>
                    <nav className='nav-tabs'>
                        <ul className='tabs'>
                            <li><NavLink activeClassName="selectedTab" exact to='/search'>Top Results</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/search/artists'>Artists</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/search/albums'>Albums</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/search/playlists'>Playlists</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <Route exact path="/search" component={SearchIndexContainer} />
                <Route exact path="/search/albums" component={AlbumSearchIndexContainer} />
                <Route exact path="/search/artists" render={() => <ArtistIndexContainer ParentType="search"/>} />
                <Route exact path="/search/playlists" render={() => <PlaylistIndexContainer
                    ParentType="search" />} />
            </div>
        )
    }
    }
}

const mapStateToProps = state => ({
    search: state.search,
})

const mapDispatchToProps = dispatch => ({
    fetchAlbum: id => fetchAlbum(id),
    fetchArtist: id => fetchArtist(id),
    fetchPlaylist: id => fetchPlaylist(id),
    fetchTrack: id => fetchTrack(id)
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)