import React from 'react';
import {Link} from 'react-router-dom';

class Error404 extends React.Component {
    render() {
        return(
            <div className="error">
                <img className="yui404" src="assets/yui404"/>
                <Link id="modal-btn" to="/">Back to home!</Link>
            </div>
        )
        }
}

export default Error404;