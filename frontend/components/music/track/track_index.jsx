import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component{
    constructor(props) {
        super(props)
    }

    // componentDidUpdate(prevProps) {
    //     // if (prevProps.tracks.length != this.props.tracks.length) {
    //     //     this.props.fetchTracks();
    //     // }
    // }

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
                    removeTrack = {this.props.removeTrackFromPlaylist}
                    addTrack = {this.props.addTrackToPlaylist}
                    currentUserPlaylists = {this.props.currentUserPlaylists}
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