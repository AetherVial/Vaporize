import React from 'react';
import {Link} from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


const Greeting = ({currentUser, logout}) => {
    const loggedinLinks = () => (
        <nav>
            <h2>HELLO {currentUser.username}</h2>
            <button onClick = {logout}>Log out!</button>
        </nav>
    )
    return currentUser ? loggedinLinks() : null;
}

export default Greeting;