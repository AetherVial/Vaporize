import React from 'react';
import PlaylistIndexItemContainer from './playlist_index_item';

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    render() {
        const { playlists } = this.props;
        
        if (!playlists) {
            return (
                null
            );
        }

        let list = playlists.map(playlist => {
            return (
                <li key={playlist.id}>
                    <PlaylistIndexItemContainer playlist={playlist} />
                </li>
            )
        })

        return (
            <div>
                <h1 className="browse-header">Your Playlists:</h1>
                <ul className="browse-index">
                    {list}
                </ul>
            </div>

        )
    }
}

export default PlaylistIndex;