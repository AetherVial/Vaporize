import React from 'react';
import ArtistIndexContainer from '../artist/artist_index_container';

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
                    <ArtistIndexContainer />
                </div>
            </div>
        )
    }
}

export default Browse;