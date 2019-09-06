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

    const loginLinks = () => (
        <header className="navbar">
            <div id="logo"><img src="assets/PBIcon.png" /><div id="apptitle">Vaporize</div></div>

            <nav className="nav-right">
                <ul id="menu">
                    <li className="menu-item"><a href="https://www.linkedin.com/in/stan1000">LinkedIn</a></li>
                    <li className="menu-item"><a href="https://www.github.com/Aethervial">GitHub</a></li>
                    <li><a href="#">|</a></li>
                    <li className="menu-item"></li>
                    <li className="menu-item" ><Link to="/login" component={LoginFormContainer}>Log In</Link></li>
                    <li className="menu-item"><Link to="/signup" component={SignupFormContainer}>Sign Up</Link></li>
                    <li className="menu-item"><Link to="/login" component={SignupFormContainer}>Demo User</Link></li>
                </ul>
            </nav>
        </header>
    )

    return currentUser ? loggedinLinks() : loginLinks();



}

export default Greeting;