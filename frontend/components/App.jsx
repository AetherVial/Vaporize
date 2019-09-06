import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashBody from './splash/splash_body';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Browse from './browse.jsx';

const App = () => (
    <div>
        <GreetingContainer />
        <Switch>
            <ProtectedRoute path="/browse" component={Browse} />
            <AuthRoute exact path="/" component={SplashBody} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
        
    </div>
);

export default App;