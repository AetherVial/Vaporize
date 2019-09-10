import React from 'react';
import { Link } from 'react-router-dom';
import {fetchPlaylist} from '../../actions/playlist_actions';

class PlaylistShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // console.log(this.props.match.params.playlistId)
        fetchPlaylist(this.props.match.params.playlistId)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.playlist.id != this.props.match.params.playlistId) {
    //         this.props.fetchPlaylist(this.props.match.params.playlistId);
    //     }
    // }

    render() {
        console.log(this.props.playlist && this.props.playlist.title)
        return (
            <div className="playlist_show">
                
                <h3>hello: {this.props.playlist && this.props.playlist.title}</h3>
            </div>
        );
    }
}

export default PlaylistShow;
