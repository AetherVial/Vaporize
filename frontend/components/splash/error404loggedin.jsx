import React from 'react';
import { Link } from 'react-router-dom';

class Error404logged extends React.Component {
    render() {
        return (
            <div className="error">
                <img className="yui404" src={window.YUI} />
                <Link id="modal-btn" to="/browse">Back to home!</Link>
            </div>
        )
    }
}

export default Error404logged;