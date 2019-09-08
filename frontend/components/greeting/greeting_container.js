import {connect} from 'react-redux'
import {fetchPlaylists} from '../../actions/playlist_actions';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchPlaylists: () => dispatch(fetchPlaylists())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);