import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, deletePlaylist } from '../../actions/playlist_actions';
import { fetchTracks, clearTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId],
        }
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    deletePlaylist: id => dispatch(deletePlaylist(id)),
    fetchTracks: id => dispatch(fetchTracks(id)),
    clearTracks: () => dispatch(clearTracks()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistShow);
