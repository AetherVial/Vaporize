import React from 'react';
import { Link } from 'react-router-dom';

class Error404logged extends React.Component {
    render() {
        return (
            <div className="error">
                <h1>404 Error!</h1>
                <h2>Page not found.</h2>
                <Link id="modal-btn" to="/browse/artists">Back to home!</Link>
                <img className="yui404" src={window.YUI} />
            </div>
        )
    }
}

export default Error404logged;