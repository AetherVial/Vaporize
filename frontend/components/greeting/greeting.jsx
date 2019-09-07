import React from 'react';
import {Link} from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


const Greeting = ({currentUser, logout}) => {
    const loggedinLinks = () => (
        <nav className="navBar">
            <div id="navBar-header"><img src="assets/PBIcon.png" />
                <div id="apptitle">Vaporize</div>
            </div>
            <div onClick = {logout}>Log out!</div>
        </nav>
    )
    return currentUser ? loggedinLinks() : null;
}

export default Greeting;