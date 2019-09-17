import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';

class ArtistShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.artistId)
        this.props.fetchTracksByArtist(this.props.match.params.artistId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.artist && this.props.match.params.artistId != prevProps.artist.id) {
            this.props.fetchArtist(this.props.match.params.artistId)
            this.props.fetchTracksByArtist(this.props.match.params.artistId)
        }
    }

    render() {
        if (!this.props.artist || !this.props.artist.trackIds) return null;
        return (
            <div className="playlist-show">
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <div className="cover-art">
                            <img className="cover" src={this.props.artist.photoUrl} />
                        </div>

                        <h3 className="playlist-title">{this.props.artist.name}</h3>
                    </div>
                    <TrackIndexContainer trackIds={this.props.artist.trackIds}/>
                </div>
            </div>
        );
    }
}

export default ArtistShow;
