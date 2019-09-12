import React from 'react';
import { NavLink } from 'react-router-dom';
import SidebarPlaylistsContainer from './sidebar_playlists_container';
import NewPlaylistContainer from '../music/playlist/new_playlist_container';
import * as SVGUtil from '../../util/svg_util'

class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchPlaylists()
    }

    loadModal(e) {
        e.preventDefault();
        const modal = document.getElementById("myModal");
        const span = document.getElementsByClassName("close")[0];
        let x = document.getElementById("myModal").style;
        if (x.display == "" || x.display == 'none') {
            modal.style.display = "block";
            modal.style.position = "fixed";
            modal.style.zIndex = 5;
        }

        span.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    render() {

    const loggedinLinks = () => (
        <nav className="navBar">
            <div id="navBar-header"><img src={window.PBURL} />
                <div id="apptitle">Vaporize</div>
            </div>
            <NavLink to="/browse" className="sidebar-el"
                activeClassName="selected">
                <SVGUtil.browse />
                    Home</NavLink>
            <NavLink to="/search" className="sidebar-el"
                activeClassName="selected">
                <SVGUtil.search />
                Search</NavLink>
            <div className="sidebar-el">
                <SVGUtil.library />
                Your Library</div>
            <button onClick={this.loadModal} id="myBtn" className="sidebar-el">
                <SVGUtil.plus />New Playlist</button>
            <NewPlaylistContainer />
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