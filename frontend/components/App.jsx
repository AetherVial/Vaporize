import React from "react";
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashBody from './splash/splash_body';


const App = () => (
    <div>
        <AuthRoute exact path="/" component={GreetingContainer}/>
        <AuthRoute exact path="/" component={SplashBody} />
    </div>
);

export default App;