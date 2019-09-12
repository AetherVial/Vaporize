import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { fetchAlbum } from '../../../actions/album_actions';
import { fetchTracksByAlbum, clearTracks } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        album: state.entities.albums[ownProps.match.params.albumId],
    }
};

const mapDispatchToProps = dispatch => ({
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    fetchTracksByAlbum: id => dispatch(fetchTracksByAlbum(id)),
    clearTracks: () => dispatch(clearTracks()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlbumShow);
