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
            <NavLink exact to="/browse/artists" className="sidebar-el"
                activeClassName="selected">
                <SVGUtil.browse />
                    Home</NavLink>
            <NavLink to="/search" className="sidebar-el"
                activeClassName="selected">
                <SVGUtil.search />
                Search</NavLink>
            <NavLink to="/browse/playlists" className="sidebar-el"
                activeClassName="selected">
                <SVGUtil.library />
                Your Library</NavLink>
            <div className="sidebar-el" onClick={this.props.logout}><svg version="1.1" id="Capa_1" x="0px" y="0px" fill="currentColor">
            <g>
                <g>
                    <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
                        s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
                        S235.019,444.2,227.619,444.2z"/>
                    <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
                        s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
                        C455.319,239.9,455.319,231.3,450.019,226.1z"/>
                </g>
            </g>

</svg>
Log out</div>

            <button onClick={this.loadModal} id="myBtn" className="sidebar-el">
                <SVGUtil.plus />New Playlist</button>
            <NewPlaylistContainer />

            <div className="sidebar-list">
                <SidebarPlaylistsContainer/>
            </div>
            
        </nav>
    )
    return this.props.currentUser ? loggedinLinks() : null;
    }
}

export default Greeting;