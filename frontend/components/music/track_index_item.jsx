import React from 'react';
import { connect } from 'react-redux';
import { fetchTrack } from '../../actions/track_actions';
import {withRouter} from "react-router-dom"

class TrackIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.track)
        const { track } = this.props;
        if (!track) {
            return (
                null
            );
        }
        
        return(
            <li key={this.props.track.id} className="song-index-item">
                <div>
                    {this.props.track.title}
                </div>
                <div>
                    {this.props.track.artistName}
                </div>
                <div>
                    {this.props.track.albumName}
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