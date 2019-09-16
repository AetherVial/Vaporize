import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../../actions/track_actions';
import {withRouter} from "react-router-dom";
import * as SVGUtil from "../../../util/svg_util";
import Dropdown from "./dropdown";

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handlePlay = this.handlePlay.bind(this)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.removeTrack(this.props.playlistId, this.props.track.id)
    }

    handleAdd(e) {
        e.preventDefault();        
    }

    handlePlay(e) {
        this.props.fetchCurrentTrack(this.props.track.id)
    }

    //this.props.fetchCurrentTrackList(this.props.track.id)
    //use this.props.playlistId

    render() {
        const { track } = this.props;
        if (!track) {
            return (
                null
            );
        }
        return(
            <li key={this.props.track.id + this.props.track.artistName} className="song-index-item">
                <div className="song-index-categories">
                    <button id="track-play-btn" onClick={this.handlePlay}><img src={window.Play} alt="play"/></button>
                    <ul>
                        <h2 className="song-title">{this.props.track.title}</h2>
                        <li>{this.props.track.artistName} &bull; {this.props.track.albumName}</li>
                    </ul>
                </div>
                <div className="song-index-categories-2">
                    <Dropdown
                     currentUserId = {this.props.currentUserId}
                     currentPlaylistId = {this.props.currentPlaylistId}
                     currentTrackId = {this.props.track.id}
                     />
                    {/* <button id="drpdown-btn" ><SVGUtil.dots /></button> */}
                    
                </div>
            </li>      


        )
    }
}

export default TrackIndexItem;
