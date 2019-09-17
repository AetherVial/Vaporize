import React from 'react';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            trackId: null
        };
        this.setupAdd = this.setupAdd.bind(this)
    }
    
    setupAdd(trackId) {
        console.log(this)
        // return () => {
        //     console.log(this.state)
        this.setState({show: true, trackId: trackId});
        //};
    }

    handleAdd(playlistId, trackId) {
        return () => {
            this.setState({show: false})
            this.props.addTrackToPlaylist(playlistId, trackId);
        };
    }

    renderAdd() {
        if (this.state.show === true) {
            console.log('render add because true')
            return (
                <div className='add-to-playlist'>
                    hii
                </div>
            )
        }
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
                    setupAdd = {this.setupAdd}
                />
            );
        });
        return(
            <div className="playlists">
            {this.renderAdd()}
            <ul>{list}</ul>
            </div>
        )
    }
}

export default TrackIndex;