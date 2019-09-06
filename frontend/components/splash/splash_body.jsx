import React from "react";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

const SplashBody = () => (
<div>
    <div className="main">
        <div className="main-content-1">Music for someone!</div>
        <div className="main-content-2">Generic Vaporwave Background! Only a few songs!</div>
        <Link to="/login" component={LoginFormContainer} className="main-content-3">Log In</Link>
        <Link to="/signup" component={SignupFormContainer} className="main-content-3">Sign Up</Link>
    </div>
    <div class="footer">
        <div class="list-container">
            <div class="footer-list">
                <div id="logo">
                    <img src="assets/PBIcon.png"/>
                    <a id="apptitle">Vaporize</a>
                </div>
            </div>

            <div class="footer-list">
                <ul>
                    <li>Tech List</li>
                    <li>Ruby on Rails</li>
                    <li>PostgresQL</li>
                    <li>React / Redux</li>
                </ul>
            </div>

            <div class="footer-list">
                <ul>
                    <li>Contact Info</li>
                    <li>Linkedin</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
    </div>
</div>

)

export default SplashBody;