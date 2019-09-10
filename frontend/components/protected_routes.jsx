import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseContainer from './music/browse_container';
import MusicBar from "./music/musicbar";
import PlaylistShowContainer from "./music/playlist_show_container";
import GreetingContainer from './greeting/greeting_container';
import Error404logged from "./splash/error404loggedin";

const ProtectedRoutes = () => (
    <div>
        <GreetingContainer />
        <Route path="/" component={MusicBar} />
        <Switch>
            <Route exact path="/browse" component={BrowseContainer} />
            <Route exact path="/playlists/:playlistId" component={PlaylistShowContainer} />
            <Route path="/" component={Error404logged} />
        </Switch>
    </div>
)

export default ProtectedRoutes;