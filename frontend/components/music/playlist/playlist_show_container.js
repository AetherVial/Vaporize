import { connect } from 'react-redux';
import PlaylistShow from './playlist_show';
import { fetchPlaylist, deletePlaylist, createPlaylistFollow, deletePlaylistFollow } from '../../../actions/playlist_actions';
import { fetchTracks, clearTracks } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id
    return {
        playlist: state.entities.playlists[ownProps.match.params.playlistId],
        currentUserId: currentUserId,
        followedPlaylists: state.entities.users[currentUserId].followedPlaylists
        }
};

const mapDispatchToProps = dispatch => ({
    fetchPlaylist: id => dispatch(fetchPlaylist(id)),
    deletePlaylist: id => dispatch(deletePlaylist(id)),
    fetchTracks: id => dispatch(fetchTracks(id)),
    clearTracks: () => dispatch(clearTracks()),
    createPlaylistFollow: (playlistId, userId) => dispatch(createPlaylistFollow(playlistId, userId)),
    deletePlaylistFollow: (playlistId, userId) => dispatch(deletePlaylistFollow(playlistId, userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaylistShow);
