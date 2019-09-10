import React from 'react';
import { Link } from 'react-router-dom';


const SidebarIndexItem = ({ playlist }) => { //deletePlaylist
    return (
        
        <li className="sidebar-el">
            <Link to={`/playlists/${playlist.id}`}>
                {playlist.title}
            </Link>
            {/* <button onClick={() => deletePost(post.id)}>Delete</button> */}
        </li>);
};

export default SidebarIndexItem;