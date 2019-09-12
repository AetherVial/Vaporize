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

    componentWillUnmount() {
        this.props.clearArtists();
    }

    render() {
        const { artists } = this.props;
        if (!artists) {
            return (
                null
            );
        }

        let list = artists.map(artist => {
            // return (<SidebarIndexItem
            //     key={artist.id}
            //     playlist={playlist}
            // />)
            return (<Link to={`artists/${artist.id}`}>{artist.name}</Link>)
        })

        return (
            <div>
                <h1 className="list-header">my name is artists</h1>
                <br></br>
                <ul>{list}</ul>
            </div>

        )
    }
}

export default ArtistIndex;