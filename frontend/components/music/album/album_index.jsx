import React from 'react';

class AlbumIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAlbums();
    }

    componentDidUpdate(prevProps) {
        if (Object.values(prevProps.albums) === Object.values(this.props.albums)) {
            this.props.fetchAlbums();
        }
    }

    componentWillUnmount() {
        this.props.clearAlbums();
    }

    render() {
        const { albums } = this.props;
        if (!albums) {
            return (
                null
            );
        }

        let list = albums.map(album => {
            return <li key={album.id + album.title}>{album.title}</li>
        })

        return (
            <div>
                <h1 className="list-header">my name is albums</h1>
                <br></br>
                <ul>{list}</ul>
            </div>

        )
    }
}

export default AlbumIndex;