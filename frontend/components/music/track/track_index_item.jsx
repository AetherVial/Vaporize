import React from 'react';
import Dropdown from "./dropdown";
import {Link} from "react-router-dom";
import * as SVGUtil from '../../../util/svg_util';

const findTrackIndex = (trackList, trackId) => {
    for (let i = 0; i < trackList.length; i++) {
        if (trackList[i].id === trackId)
            return i;
    }
    return -1;
};

const makeQueue = (index, array) => {
    let temp = array.slice(index);
    return temp.concat(array.slice(0, index))
}

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlay = this.handlePlay.bind(this)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeTrack(this.props.playlistId, this.props.track.id)
    }

    handlePlay(e) {
        e.preventDefault();
        this.props.fetchCurrentTrack(this.props.track.id)
        let i = findTrackIndex(this.props.tracks, this.props.track.id)
        let q = makeQueue(i, this.props.tracks)
        this.props.receiveCurrentTrackList(q)
    }

    render() {
        const { track } = this.props;
        if (!track) {
            return (
                null
            );
        }

        window.addEventListener('click', () => {
            $(`.dropdown-content`).removeClass('show-list')
        })
        return(
            <li key={this.props.track.id + this.props.track.artistName} className="song-index-item" onDoubleClick={this.handlePlay}>
                <div className="song-index-categories">
                    <button id="track-play-btn" onClick={this.handlePlay}><SVGUtil.note /></button>
                    <ul>
                        <h2 className="song-title">{this.props.track.title}</h2>
                        <li><Link to={`/artists/${this.props.track.artistId}`} replace>
                            {this.props.track.artistName}</Link>&nbsp;
                             &bull; &nbsp;
                             <Link to={`/albums/${this.props.track.albumId}`} replace>
                        {this.props.track.albumName}</Link></li>
                    </ul>
                </div>
                <div className="song-index-categories-2">
                    <Dropdown
                    temp = {this.props.temp}
                    setupAdd={this.props.setupAdd}
                    currentUserPlaylists = {this.props.currentUserPlaylists}
                    currentUserId = {this.props.currentUserId}
                    currentPlaylistId = {this.props.currentPlaylistId}
                    currentTrackId = {this.props.track.id}
                    playlistId = {this.props.playlistId}
                    playlistUser = {this.props.playlistUser}
                    removeTrack = {this.props.removeTrack}
                    />
                </div>
            </li>      


        )
    }
}

export default TrackIndexItem;
