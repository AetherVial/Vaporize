import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashNav from './splash_nav';


const App = () => (
    <div>
        <h1>Vaporize!</h1>
        <GreetingContainer />
        <AuthRoute exact path="/" component={SplashNav} />
        {/* <ProtectedRoute exact path="/" component={SplashNav}/> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        
    </div>
);

export default App;