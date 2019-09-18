import {connect} from 'react-redux';
import React from 'react';
import {Link} from 'react-router-dom';

const mstp = state => ({
    albums: Object.values(state.search.albums)
})

class AlbumSearchIndex extends React.Component {
    constructor(props) {
        super(props);
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
                <li key={album.id}>
                    <Link to={`/albums/${album.id}`} className="albumIndexItem">
                        <img className="cover-art-index" src={album.photoUrl} />
                        {album.title}
                    </Link> 
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

export default connect(mstp)(AlbumSearchIndex);