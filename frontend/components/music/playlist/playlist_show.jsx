import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexContainer from '../track/track_index_container';
import * as SVGUtil from '../../../util/svg_util';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.followToggle = this.followToggle.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
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
            .then(this.props.history.push('/browse/artists'))
    }

    followToggle(e) {
        e.preventDefault();
        if (this.props.playlist.followers.includes(this.props.currentUserId)) {
            this.props.deletePlaylistFollow(this.props.playlist.id, this.props.currentUserId)
        } else {
            this.props.createPlaylistFollow(this.props.playlist.id, this.props.currentUserId)
        }
    }

    handleDrop(e) {
        e.stopPropagation();
        $(`.dropdown-content`).removeClass("show-list")
        $(`.${this.props.temp}`).toggleClass("show-list")
    }

    render() {
        if (!this.props.playlist || !this.props.playlist.trackIds) return null;
        
        return (
            <div className="playlist-show">
                <div className="playlist-show-bg"
                style={{ backgroundImage: `url(${window.Yacht})` }}>
                </div>
                <div className="playlist-show-container">
                    <div className="playlist-info">
                        <div className="cover-art">
                            <img className="cover" src={window.Yacht}/>
                        </div>
                        <h3 className="playlist-title">{this.props.playlist.title}</h3>
                        <div>
                        <button id="drpdown-btn" onClick={this.handleDrop}><SVGUtil.dots /></button>
                        <ul className={`dropdown-content ${this.props.temp}`}>
                            <li onClick={this.handleClick}>Delete Playlist</li>
                            <li onClick={this.followToggle}>Follow / Unfollow</li>
                        </ul>
                        </div>
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
