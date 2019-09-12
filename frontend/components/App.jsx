import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseContainer from './music/browse_container';
import MusicBar from "./music/musicbar";
import PlaylistShowContainer from "./music/playlist_show_container";
import GreetingContainer from './greeting/greeting_container';
import Error404logged from "./splash/error404loggedin";
import SplashBody from './splash/splash_body';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Error404 from "./splash/error404";


const App = () => (
    <div className="page">
        <GreetingContainer />
        <ProtectedRoute path="/" component={MusicBar} />
    
        <Switch>
        <AuthRoute exact path="/" component={SplashBody} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        
        <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer} />
        <ProtectedRoute exact path="/browse" component={BrowseContainer} />

        <ProtectedRoute path="/" component={Error404logged} />
        <AuthRoute path="/" component={Error404} />
        </Switch>
    </div>
);

export default App;