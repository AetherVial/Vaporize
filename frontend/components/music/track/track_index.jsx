import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { tracks } = this.props;
        if (!tracks) {
            return (
                null
            );
        }
        
        const list = tracks.map((track, idx) => {
            if (!track) return null;
            let key;
            if (!this.props.tracks) {
                key = Math.random();
            } else {
                key = track.title + idx;
            }
            return (
                <TrackIndexItem
                    key={key}
                    track={track}
                    tracks = {this.props.tracks}
                    removeTrack = {this.props.removeTrackFromPlaylist}
                    addTrack = {this.props.addTrackToPlaylist}
                    currentUserPlaylists = {this.props.currentUserPlaylists}
                    fetchCurrentTrack = {this.props.fetchCurrentTrack}
                    receiveCurrentTrack = {this.props.receiveCurrentTrack}
                    receiveCurrentTrackList = {this.props.receiveCurrentTrackList}
                    playlistId = {this.props.playlistId}
                    playlistUser = {this.props.playlistUser}
                    currentUserId = {this.props.currentUserId}
                />
            );
        });

        return(
            <div className="playlists">
            <ul>{list}</ul>
            </div>
        )
    }
}

export default TrackIndex;