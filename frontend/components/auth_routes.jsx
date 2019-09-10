import React from "react";
import { Route, Switch } from 'react-router-dom';
import SplashBody from './splash/splash_body';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Error404 from "./splash/error404";

const AuthRoutes = () => (
    <div>
        <Switch>
        <Route exact path="/" component={SplashBody} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/" component={Error404} />
        </Switch>
    </div>
)

export default AuthRoutes;