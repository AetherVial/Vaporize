import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashBody from './splash/splash_body';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Browse from './browse.jsx';
import MusicBar from "./music/musicbar";


const App = () => (
    <div className="page">
        <AuthRoute exact path="/" component={SplashBody} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />

        <GreetingContainer />


        <ProtectedRoute path="/browse" component={Browse} />
        <ProtectedRoute path="/" component={MusicBar} />
        
    </div>
);

export default App;