import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPlaylist } from '../../../actions/playlist_actions';

class PlaylistIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.playlist) {
            return null
        } else {
            return (
                <Link to={`/playlists/${this.props.playlist.id}`} className="albumIndexItem">
                    <img className="cover-art-index" src={window.Yacht} />
                    {this.props.playlist.title}
                </Link>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return { playlist: ownProps.playlist }
}

const mapDispatchToProps = dispatch => ({
    fetchplaylist: (id) => dispatch(fetchplaylist(id))
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaylistIndexItem));