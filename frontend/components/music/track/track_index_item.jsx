import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../../actions/track_actions';
import {withRouter} from "react-router-dom"

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    handleDelete(e) {
        e.preventDefault();
        console.log("hello")
        this.props.removeTrack(this.props.playlistId, this.props.track.id)
    }

    drop(e) {
        e.preventDefault();
        document.getElementById("myDropdown").classList.toggle("show");
    }

    render() {
        const { track } = this.props;
        if (!track) {
            return (
                null
            );
        }
        
        return(

            <li key={this.props.track.id} className="song-index-item">
                <div className="song-index-categories">
                    <ul>
                        <h2 className="song-title">{this.props.track.title}</h2>
                        <li>{this.props.track.artistName} &bull; {this.props.track.albumName}</li>
                    </ul>
                </div>
                <div className="song-index-categories">
                    <div className="dropdown">
                        {/* <button onClick={this.drop.bind(this)} className="dropbtn">Dropdown</button> */}
                            <ul id="myDropdown" className="dropdown-content">
                                <li>
                                    <button className="temp" onClick={this.handleDelete.bind(this)}>Delete Me!</button>
                                </li>
                            </ul>
                    </div>
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