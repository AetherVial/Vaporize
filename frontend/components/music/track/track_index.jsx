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
        this.handleAdd = this.handleAdd.bind(this)
        this.changeBoolean = this.changeBoolean.bind(this)
    }
    
    setupAdd(trackId) {
        this.setState({show: true, trackId: trackId});
    }

    changeBoolean() {
        this.setState({show: false});
    }

    handleAdd(playlistId, trackId) {
        return () => {
            this.setState({show: false});
            this.props.addTrackToPlaylist(playlistId, trackId);
        };
    }

    renderAdd() {
        if (this.state.show === true) {
            this.props.currentUserPlaylists.each
            return (
                <div className='add-to-playlist'>
                    <div>
                        <button className="close" onClick={this.changeBoolean}>
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Close</title><path d="M31.098 29.794L16.955 15.65 31.097 1.51 29.683.093 15.54 14.237 1.4.094-.016 1.508 14.126 15.65-.016 29.795l1.414 1.414L15.54 17.065l14.144 14.143" fill="#FFF" fillRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <h1>Add to Playlist</h1>
                    <ul className='pl-index'>
                        {this.props.currentUserPlaylists.map(playlist => {
                            if (playlist.id != this.props.playlistId && !playlist.trackIds.includes(this.state.trackId)) {
                            return (
                                <li key={playlist.id}>
                                    <div className='albumIndexItem'>
                                    <div onClick={this.handleAdd(playlist.id, this.state.trackId)}>
                                        <img className='album-art-index' src={window.Yacht}></img>
                                        <span>{playlist.title}</span>
                                    </div>
                                    </div>
                                </li>
                            )};
                        })}
                    </ul>
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
            let temp;
            if (!this.props.tracks) {
                temp = Math.random();
            } else {
                temp = track.id + idx;
            }
            return (
                <TrackIndexItem
                    key = {temp}
                    temp = {temp}
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