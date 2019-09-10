import React from 'react';
import { Link } from 'react-router-dom';
import {fetchPlaylist} from '../../actions/playlist_actions';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        // console.log(this.props.match.params.playlistId)
        fetchPlaylist(this.props.match.params.playlistId)
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.playlist.id != this.props.match.params.playlistId) {
        //     this.props.fetchPlaylist(this.props.match.params.playlistId);
        // }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.deletePlaylist(this.props.match.params.playlistId)
            .then(this.props.history.push('/browse'))
    }

    render() {
        // try returning null if this.props.playlist is undefined
        // let id = this.props.playlist && this.props.playlist.title
        return (
            <div className="playlist_show">
                <h3>hello: {this.props.playlist && this.props.playlist.title}</h3>
                <button id="modal-btn" onClick={this.handleClick}>Delete Playlist</button>
            </div>
        );
    }
}

export default PlaylistShow;
