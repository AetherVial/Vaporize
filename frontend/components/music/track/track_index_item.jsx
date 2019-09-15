import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../../actions/track_actions';
import {withRouter} from "react-router-dom"

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

    drop(e) {
        e.preventDefault();
        document.getElementById("myDropdown").classList.toggle("show");
    }

    select(e) {
        e.preventDefault();
        // console.log(this.props.currentUserPlaylists)
        // let list = document.getElementsByClassName("song-index-item")
        // list.forEach(el => {
        //     el.classList.remove("selected-song")
        // })
        e.currentTarget.classList.toggle('selected-song')
    }

    render() {
        const { track } = this.props;
        if (!track) {
            return (
                null
            );
        }
    
        return(

            <li key={this.props.track.id + this.props.track.artistName} className="song-index-item" onClick={this.select.bind(this)}>
                <div className="song-index-categories">
                    <ul>
                        <h2 className="song-title">{this.props.track.title}</h2>
                        <li>{this.props.track.artistName} &bull; {this.props.track.albumName}</li>
                    </ul>
                </div>
                <div className="song-index-categories">
                    <button onClick={this.handlePlay}>Play!</button>
                        {/* <input id="check02" type="checkbox" name="menu" /> */}
                        Track Menu
                            {/* <ul class="submenu">
                                <li><a href="#">Sotto menu 3 (long text)</a></li>
                                <li><a href="#">Sotto menu 4</a></li>
                                <li><a href="#">Sotto menu 5</a></li>
                                <li>
                                    <button className="temp" onClick={this.handleDelete.bind(this)}>Delete Me!</button>
                                </li>
                            </ul> */}
                </div>
            </li>      


        )
    }
}

export default TrackIndexItem;
// const mapStateToProps = (state, ownProps) => {
    
//     return {
//         playlist: state.entities.playlists[ownProps.match.params.playlistId],
//         tracks: state.entities.tracks,
//         currentUser: state.session.currentUser,
//         playlists: state.entities.playlists
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     fetchTrack: id => dispatch(fetchTrack(id))
// })



// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem));