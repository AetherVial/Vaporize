import React from 'react';
import NewPlaylistContainer from '../music/new_playlist_container';
import SidebarIndexItem from './sidebar_index_item';

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

    loadModal(e) {
        e.preventDefault();
        const modal = document.getElementById("myModal");
        // const btn = document.getElementById("myBtn");
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
        let list = this.props.playlists.map(playlist => {
            return (<SidebarIndexItem 
                    key={playlist.id}
                    playlist={playlist}
                    />)
        })

        return(
            <div>
                <button onClick={this.loadModal} id="myBtn" className="sidebar-el">New Playlist</button>
                <NewPlaylistContainer />
                <ul>{list}</ul>
            </div>
           
        )
    }
}

export default SidebarPlaylists;
