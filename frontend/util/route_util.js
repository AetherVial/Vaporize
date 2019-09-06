import React from 'react';
import {withRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const Auth = ({component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props => 
            !loggedIn ? <Component {...props} /> : <Redirect to="/browse" />
        }
    />
);

const mapStateToProps = state => {
    return {loggedIn: Boolean(state.session.id)};
}

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route 
        path={path} 
        exact={exact} 
        render={(props) => (
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )} />
);

export const AuthRoute = withRouter(
    connect(mapStateToProps)(Auth)
);

export const ProtectedRoute = withRouter(
    connect(mapStateToProps)(Protected)
);