
import { connect } from "react-redux";
import Search from './search';
import { withRouter } from "react-router";
import {clearSearch, search} from '../../actions/search_actions';
import {fetchCurrentTrack } from '../../actions/queue_actions';

//const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        search: (query) => dispatch(search(query)),
        clearSearch: () => dispatch(clearSearch()),
        fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id))

    };
};

export default withRouter(connect(null, mapDispatchToProps)(Search))