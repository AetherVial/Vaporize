import React from 'react';
import {withRouter} from 'react-router-dom';

class PlaylistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let close = document.getElementsByClassName("close");
        $(close).click();
        this.props.action(this.state)
            .then(() => this.props.history.push(`/`))
    }

    render() {
        return(
            <div id="myModal" className="modal">
                <h1>Create new playlist</h1>
                <div className="modal-content">
                    <form onSubmit={this.handleSubmit} >
                        <label>
                            <input type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}/>
                        </label>
                    <input type="submit" value={this.props.formType}/>
                    </form>
                    <span className="close">Cancel</span>
                </div>
            </div>
        )
    }
}

export default withRouter(PlaylistForm);