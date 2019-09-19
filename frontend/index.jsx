import React from "react";
import ReactDOM from "react-dom";
import {Root} from './components/root';
import configureStore from './store/store';
import {createPlaylistFollow, deletePlaylistFollow} from './actions/playlist_actions';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //Test
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createPlaylistFollow = createPlaylistFollow;
    window.deletePlaylistFollow = deletePlaylistFollow;
    //test end
    // window.onclick = function (event) {
    //     if (!event.target.matches('.dropbtn')) {
    //         let dropdowns = document.getElementsByClassName("dropdown-content");
    //         let i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');
    //             }
    //         }
    //     }
    // }

    ReactDOM.render(<Root store={store}/>, root);
});