import React from 'react';
import SidebarIndexItem from './sidebar_index_item';

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
