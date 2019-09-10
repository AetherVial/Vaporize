import React from 'react';
import {Link} from 'react-router-dom';
import SidebarPlaylistsContainer from './sidebar_playlists_container';
import NewPlaylistContainer from '../music/new_playlist_container';
import * as SVGUtil from '../../util/svg_util'

class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchPlaylists()
    }

    render() {

    const loggedinLinks = () => (
        <nav className="navBar">
            <div id="navBar-header"><img src="assets/PBIcon.png" />
                <div id="apptitle">Vaporize</div>
            </div>
            <Link to="/" className="sidebar-el">
                <SVGUtil.browse />
                Home</Link>
            <div className="sidebar-el">
                <SVGUtil.search />
                Search</div>
            <div className="sidebar-el">
                <SVGUtil.library />
                Your Library</div>

            <h1 className="list-header">Playlists:</h1>

            <div className="sidebar-list">
                <SidebarPlaylistsContainer/>
            </div>
            
            <div className="sidebar-el" onClick = {this.props.logout}>Log out!</div>
        </nav>
    )
    return this.props.currentUser ? loggedinLinks() : null;
    }
}

export default Greeting;