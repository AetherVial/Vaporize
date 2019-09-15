import React from 'react';
import AlbumIndexItemContainer from './album_index_item';

class AlbumIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbums();
    }

    render() {
        const { albums } = this.props;
        if (!albums) {
            return (
                null
            );
        }

        let list = albums.map(album => {
            return (
            <li key={album.album.id}>
                <AlbumIndexItemContainer album={album}/>
            </li>
            )
        })

        return (
            <div>
                <h1 className="browse-header">All Albums</h1>
                <ul className="browse-index">
                {list}
                </ul>
            </div>

        )
    }
}

export default AlbumIndex;