import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BrowseContainer from './music/browse/browse_container';
import MusicBarContainer from "./music/musicbar_container";
import PlaylistShowContainer from "./music/playlist/playlist_show_container";
import GreetingContainer from './greeting/greeting_container';
import Error404logged from "./splash/error404loggedin";
import SplashBody from './splash/splash_body';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import ArtistShowContainer from "./music/artist/artist_show_container";
import AlbumShowContainer from "./music/album/album_show_container";
import search_container from "./search/search_container";

const App = () => (
    <div className="page">
        <GreetingContainer />
        <ProtectedRoute path="/" component={MusicBarContainer} />
    
        <Switch>
            <AuthRoute exact path="/" component={SplashBody} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute path="/search" component={search_container} />
            <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShowContainer} />
            <ProtectedRoute path="/browse/artists" component={BrowseContainer} />
            <ProtectedRoute path="/browse/albums" component={BrowseContainer} />
            <ProtectedRoute path="/browse/playlists" component={BrowseContainer} />
            <ProtectedRoute exact path="/artists/:artistId" component={ArtistShowContainer} />
            <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />

            <ProtectedRoute path="/" component={Error404logged} />
            <AuthRoute path="/" component={SplashBody} />
        </Switch>
    </div>
);

export default App;