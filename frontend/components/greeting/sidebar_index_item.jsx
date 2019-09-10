import React from 'react';
import { Link } from 'react-router-dom';


const SidebarIndexItem = ({ playlist }) => { //deletePlaylist
    return (
        
        <li>
            <Link to={`/playlists/${playlist.id}`}>
                {playlist.title}
            </Link>
      {/* <Link to={`/posts/${post.id}/edit`}>
                Edit
      </Link> */}
            {/* <button onClick={() => deletePost(post.id)}>Delete</button> */}
        </li>);
};

export default SidebarIndexItem;