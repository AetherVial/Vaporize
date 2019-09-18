import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.fetchPlaylist(this.props.match.params.playlistId)
        this.props.fetchTracks(this.props.match.params.playlistId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.playlist && this.props.match.params.playlistId != prevProps.playlist.id) {
            this.props.fetchPlaylist(this.props.match.params.playlistId)
            this.props.fetchTracks(this.props.match.params.playlistId)
        } 
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deletePlaylist(this.props.match.params.playlistId)
            .then(this.props.history.push('/browse'))
    }

    render() {
        if (!this.props.playlist || !this.props.playlist.trackIds) return null;
        // if (!this.props.playlist) return null;
        return (
            <div className="playlist-show"
                style={{ backgroundImage: `url(${window.Yacht})` }}>
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <div className="cover-art">
                            <img className="cover" src={window.Yacht}/>
                        </div>
                        <h3 className="playlist-title">{this.props.playlist.title}</h3>
                        <button id="modal-btn" onClick={this.handleClick}>Delete Playlist</button>
                    </div>

                    <TrackIndexContainer 
                    playlistId={this.props.match.params.playlistId}
                    trackIds={this.props.playlist.trackIds}
                    playlistUser = {this.props.playlist.userId}
                    />
                </div>
            </div>
            );
        }
    }
    
    export default PlaylistShow;
