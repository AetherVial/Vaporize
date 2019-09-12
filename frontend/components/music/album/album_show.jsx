import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';

class AlbumShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchAlbum(this.props.match.params.albumId)
        this.props.fetchTracksByAlbum(this.props.match.params.albumId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.album && this.props.match.params.albumId != prevProps.album.id) {
            this.props.fetchAlbum(this.props.match.params.albumId)
            this.props.fetchTracksByAlbum(this.props.match.params.albumId)
        }
    }

    render() {
        if (!this.props.album) return null;
        return (
            <div className="artist-show">
                <div className="artist-show-container">
                    <h3>{this.props.album.title}</h3>
                    <TrackIndexContainer />
                </div>
            </div>
        );
    }
}

export default AlbumShow;
