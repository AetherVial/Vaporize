import React from "react";
import ReactDOM from "react-dom";
import {Root} from './components/root';
import configureStore from './store/store';
import {fetchTracks, fetchTrack} from './actions/track_actions';

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
    
    //TESTING
    window.store= store;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchTracks = fetchTracks;
    window.fetchTrack = fetchTrack;


    ReactDOM.render(<Root store={store}/>, root);
});