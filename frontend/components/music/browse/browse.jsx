import React from 'react';
import ArtistIndexContainer from '../artist/artist_index_container';
import AlbumIndexContainer from '../album/album_index_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
import {NavLink, Route} from 'react-router-dom';

class Browse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="browse">
                <div className='tabs-container'>
                    <nav className='nav-tabs'>
                        <ul className='tabs'>
                            {/* <li><NavLink to='/browse'>Home</NavLink></li> */}
                            <li><NavLink activeClassName="selectedTab" to='/browse/artists'>Artists</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/browse/albums'>Albums</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/browse/playlists'>Playlists</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/search'>Search</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <Route exact path="/browse/albums" component={AlbumIndexContainer} />
                <Route exact path="/browse/artists" component={ArtistIndexContainer} />
                <Route exact path="/browse/playlists" component={PlaylistIndexContainer} />
            </div>
        )
    }
}

export default Browse;