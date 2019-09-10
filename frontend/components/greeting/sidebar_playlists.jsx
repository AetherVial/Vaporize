import React from 'react';
import NewPlaylistContainer from '../music/new_playlist_container';
import SidebarIndexItem from './sidebar_index_item';
import * as SVGUtil from "../../util/svg_util";

class SidebarPlaylists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {playlists: this.props.playlists};
    }

    componentDidUpdate(prevProps) {
        if(Object.values(prevProps.playlists) === Object.values(this.props.playlists)) {
           this.props.fetchPlaylists();
        }
    }

    render() {
        let list = this.props.playlists.map(playlist => {
            return (<SidebarIndexItem 
                    key={playlist.id}
                    playlist={playlist}
                    />)
        })

        return(
            <div>
                <h1 className="list-header">Playlists:</h1>
                <br></br>
                <ul>{list}</ul>
            </div>
           
        )
    }
}

export default SidebarPlaylists;
