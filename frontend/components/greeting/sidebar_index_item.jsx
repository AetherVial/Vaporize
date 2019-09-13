import React from 'react';
import { NavLink } from 'react-router-dom';


const SidebarIndexItem = ({ playlist }) => { //deletePlaylist
    return (
        
        <li className="sidebar-el">
            <NavLink activeClassName="selected" to={`/playlists/${playlist.id}`}>
                {playlist.title}
            </NavLink>
        </li>);
};

export default SidebarIndexItem;