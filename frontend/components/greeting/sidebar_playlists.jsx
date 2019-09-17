import React from 'react';
// import SidebarIndexItem from './sidebar_index_item';
import {NavLink} from 'react-router-dom';

class SidebarPlaylists extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        if(Object.values(prevProps.playlists) === Object.values(this.props.playlists)) {
           this.props.fetchPlaylists();
        }
    }

    render() {
        let list = this.props.playlists.map(playlist => {
            return (<li key={playlist.id + Math.random()}className="sidebar-el">
                <NavLink activeClassName="selected" to={`/playlists/${playlist.id}`}>
                    {playlist.title}
                </NavLink>
            </li>)
        })

        return(
            <div>
                <h1 className="list-header">Playlists:</h1>
                <br></br>
                <ul>
                {list}
                </ul>
            </div>
           
        )
    }
}

export default SidebarPlaylists;
