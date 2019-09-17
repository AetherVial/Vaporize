import React from 'react';
import {Link} from 'react-router-dom';

class ArtistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtists();
    }

    componentDidUpdate(prevProps) {
        if (Object.values(prevProps.artists) === Object.values(this.props.artists)) {
            this.props.fetchArtists();
        }
    }

    // componentWillUnmount() {
    //     this.props.clearArtists();
    // }

    render() {
        const { artists } = this.props;
        if (!artists) {
            return (
                null
            );
        }

        let list = artists.map((artist, idx) => {
            return (<Link key={artist.name+idx} to={`/artists/${artist.id}`} className="albumIndexItem">
                <img className="artist-art-index" src={artist.photoUrl} />
                {artist.name}
                </Link>)
        })

        return (
            <div >
                <h1 className="browse-header">Artists</h1>
                <ul className="browse-index">{list}</ul>
            </div>

        )
    }
}

export default ArtistIndex;