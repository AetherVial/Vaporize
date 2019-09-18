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
        if (prevProps.album && this.props.match.params.albumId != prevProps.album.album.id) {
            this.props.fetchAlbum(this.props.match.params.albumId)
            this.props.fetchTracksByAlbum(this.props.match.params.albumId)
        }
    }

    render() {

    if (!this.props.album || !this.props.album.trackIds) return null;
        return (
            <div className="playlist-show" style={{ backgroundImage: `url(${this.props.album.album.photoUrl})` }} >
                {/* style={{ backgroundImage: `url(${this.props.album.album.photoUrl})` }} */}
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <div className="cover-art">
                            <img className="cover" src={this.props.album.album.photoUrl} />
                        </div>
                        <h3 className="playlist-title">{this.props.album.album.title}</h3>
                        <h4 className="playlist-title">
                            {this.props.album.album.artist.name}
                        </h4>
                        
                    </div>
                    <TrackIndexContainer trackIds={this.props.album.trackIds}/>
                </div>
            </div>
        );
    }
}

export default AlbumShow;
