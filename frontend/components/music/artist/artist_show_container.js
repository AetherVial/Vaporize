import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist, deleteArtist } from '../../../actions/artist_actions';
import { fetchTracksByArtist, clearTracks } from '../../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        artist: state.entities.artists[ownProps.match.params.artistId],
    }
};

const mapDispatchToProps = dispatch => ({
    fetchArtist: id => dispatch(fetchArtist(id)),
    fetchTracksByArtist: id => dispatch(fetchTracksByArtist(id)),
    clearTracks: () => dispatch(clearTracks()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtistShow);
