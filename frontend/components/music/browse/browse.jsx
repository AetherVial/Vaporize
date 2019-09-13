import React from 'react';
import ArtistIndexContainer from '../artist/artist_index_container';
import {NavLink} from 'react-router-dom';

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
                            <li><NavLink to='/browse'>Home</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/browse/artists'>Artists</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/browse/albums'>Albums</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/browse/playlists'>Playlists</NavLink></li>
                            <li><NavLink activeClassName="selectedTab" to='/search'>Search</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Browse;