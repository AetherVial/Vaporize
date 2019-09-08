import React from 'react';

class SidebarPlaylists extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let list = this.props.playlists.map(playlist => {
            console.log(playlist)
            return <li key={playlist.id}>{playlist.title}</li>
        })
        return(
           <ul>{list}</ul>
        )
    }

}

export default SidebarPlaylists;