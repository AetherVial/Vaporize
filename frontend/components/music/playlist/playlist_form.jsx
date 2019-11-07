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
        if (this.state.title !== '') {
            const playlist = Object.assign({}, this.state);
            this.props.action(playlist).then(
                newPlaylist => {
                    let id = (Object.values(newPlaylist.playlist)[0].id)
                    this.props.history.push(`/playlists/${id}`)
                })
        }
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
                    <div className="buttons">
                        <input id="modal-btn" type="submit" value={this.props.formType} />
                        <div id="modal-btn" className="close">Close</div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(PlaylistForm);