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
                    idx={idx + 1}
                    playlistId = {this.props.playlistId}
                    artistId = {this.props.artistId}
                    albumId = {this.props.albumId}
                    removeTrack = {this.props.removeTrackFromPlaylist}
                    addTrack = {this.props.addTrackToPlaylist}
                    currentUserPlaylists = {this.props.currentUserPlaylists}
                    fetchCurrentTrack = {this.props.fetchCurrentTrack}
                    receiveCurrentTrack = {this.props.receiveCurrentTrack}
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