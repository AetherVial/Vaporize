import React from 'react';
import { Link } from 'react-router-dom';


const SidebarIndexItem = ({ playlist }) => { //deletePlaylist
    return (
        
        <li className="sidebar-el">
            <Link to={`/playlists/${playlist.id}`}>
                {playlist.title}
            </Link>
        </li>);
};

export default SidebarIndexItem;