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

    if (!this.props.album || !this.props.album.trackIds) return null;
        return (
            <div className="playlist-show">
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <div className="cover-art">
                            <img className="cover" src={window.Yacht} />
                        </div>
                        <h3 className="playlist-title">{this.props.album.album.title}</h3>
                    </div>
                    <TrackIndexContainer trackIds={this.props.album.trackIds}/>
                </div>
            </div>
        );
    }
}

export default AlbumShow;
