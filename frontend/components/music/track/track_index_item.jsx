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
        this.props.removeTrack(this.props.playlistId, this.props.track.id)
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
                    {this.props.track.title}
                    {this.props.track.artistName}
                    {this.props.track.albumName}
                </div>
                <div className="song-index-categories">
                    Dropdown in here!
                    Time Goes Here!
                </div>
                <button onClick={this.handleDelete.bind(this)}>Delete Me!</button>
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