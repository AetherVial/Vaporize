import React from 'react';

class Browse extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="browse">
                <div className="browse-header">
                    
                </div>
                <div>
                    <h1 className="made-for-header">Made for {this.props.currentUser.username}</h1>
                    Get worse recommendations the more you listen.
                    </div>
            </div>
        )
    }
}

export default Browse;