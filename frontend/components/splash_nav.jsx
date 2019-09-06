import React from "react";
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';


const SplashNav = () => (
    <header className="navbar">
        <div id="logo"><img src="./PBIcon.png"/><div id="apptitle">Vaporize</div></div>


            <nav className="nav-right">
                <ul id="menu">
                    <li className="menu-item"><a href="https://www.linkedin.com/in/stan1000">LinkedIn</a></li>
                    <li className="menu-item"><a href="https://www.github.com/Aethervial">GitHub</a></li>
                    <li className="menu-item"><a href="#">|</a></li>
                    <li className="menu-item"><a href="#">Demo</a></li>
                    <li className="menu-item"><a href="#">Sign Up</a></li>
                    <li className="menu-item"><a href="#">Log In</a></li>
                </ul>
            </nav>
    </header>
)


export default SplashNav;