import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProtectedRoutes from './protected_routes';
import AuthRoutes from "./auth_routes";


const App = () => (
    <div className="page">
        
            <AuthRoute path="/" component={AuthRoutes} />
            <ProtectedRoute path="/" component={ProtectedRoutes}/>
            
        
    </div>
);

export default App;