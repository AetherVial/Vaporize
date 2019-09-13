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
        return (
            <div className="playlist-show">
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <div className="cover-art">
                            <img className="cover" src="assets/yachtzee.jpg"/>
                        </div>
                        
                        <h3 className="playlist-title">{this.props.playlist.title}</h3>
                    </div>
                    {/* <button onClick={this.handleClick}>Delete Playlist</button> */}
                    <TrackIndexContainer 
                    playlistId={this.props.match.params.playlistId}
                    trackIds={this.props.playlist.trackIds}
                    />
                </div>
            </div>
            );
        }
    }
    
    export default PlaylistShow;
