import React from 'react';
import {withRouter} from 'react-router-dom';
import { addTrackToPlaylist, removeTrackFromPlaylist } from "../../../actions/track_actions"
import {connect} from 'react-redux';
import * as SVGUtil from '../../../util/svg_util';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.stopPropagation();
        $(".dropdown-content").addClass("show")
    }

    render() {

        let list;
        if (this.props.currentUserId != this.props.playlistId) {
            list =  
                    <div>
                    <button id="drpdown-btn" onClick={this.handleClick}><SVGUtil.dots /></button>
                    <ul className="dropdown-content">
                        <li>Add to playlist</li>
                    </ul>
            </div>
               
        } else {
            list =      <div>
                        <button id="drpdown-btn" onClick={this.handleClick}><SVGUtil.dots /></button>
                        <ul className="dropdown-content">
                            <li>Add to Playlist</li>
                            <li>Remove from Playlist</li>
                        </ul>
                        </div>
                    
        }
        return (
            <div>
                {list}
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => ({
    currentUserId: ownProps.currentUserId,
    currentUserPlaylists: ownProps.currentUserPlaylists,
    playlistId: ownProps.playlistId
})

const mapDispatchToProps = dispatch => ({
    addTrackToPlaylist: (id, playlistId) => addTrackToPlaylist(id, playlistId),
    removeTrackFromPlaylist: (id, playlistId) => removeTrackFromPlaylist(id, playlistId)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dropdown));