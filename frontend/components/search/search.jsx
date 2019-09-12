import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div className="search-container">
            <input type="text" 
                className="search-bar"
                placeholder="Start typing..."></input>
        </div>
        )
    }
}

export default Search;