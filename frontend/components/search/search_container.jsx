
import { connect } from "react-redux";
import Search from './search';
import { withRouter } from "react-router"
import {clearSearch, search} from '../../actions/search_actions';

//const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
    return {
        search: (query) => dispatch(search(query)),
        clearSearch: () => dispatch(clearSearch())
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Search))