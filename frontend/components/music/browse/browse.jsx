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
                <div className="browse-header">
            </div>
                <div className="made-for-header">
                    <h1>Made for {this.props.currentUser.username}</h1>
                    <h3>Get worse recommendations the more you listen.</h3>
                    <NavLink to='browse/artists'>Artists</NavLink>
                </div>
            </div>
        )
    }
}

export default Browse;