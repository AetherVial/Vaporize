import React from 'react';
import SearchResults from './search_results';
class Search extends React.Component {

    constructor(props) {
        super(props),
        this.state = {
            query: ""
        }
    }

    update(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value});
            if (this.state.query.length >= 2) {
                this.props.search(e.currentTarget.value)
            }
        }
    }

    render() {
        return (
        <div className="search-container">
            <input type="text" 
                value={this.state.query}
                className="search-bar"
                placeholder="Start typing..."
                onChange={this.update('query')}
                />
            <SearchResults />
        </div>
        )
    }
}

export default Search;