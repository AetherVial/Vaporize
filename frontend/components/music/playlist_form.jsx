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
        this.props.action(this.state)
            .then(() => this.props.history.push(`/`));
        this.setState({
            title: ''
        })
        $(close).click();
    }

    render() {
        return(
            <div id="myModal" className="modal">
                <div id="modal-header">
                <h1>Enter Playlist Name:</h1>
                </div>
                <div className="modal-content">
                    <form onSubmit={this.handleSubmit} >
                        <label>
                            <input 
                                    className = "modal-input"
                                    placeholder='Start typing...'
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.update('title')}/>
                        </label>
                        <br></br>
                    <input id="modal-btn" type="submit" value={this.props.formType}/>
                    <div id="modal-btn" className="close">Close</div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(PlaylistForm);