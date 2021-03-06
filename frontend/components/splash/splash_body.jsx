import React from "react";
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SplashBody = () => (
<div>
        <header className="navbar">
            <div id="logo"><img src={window.PBURL} /><div id="apptitle">Vaporize</div></div>

            <nav className="nav-right">
                <ul id="menu">
                    <li className="menu-item"><a href="https://www.linkedin.com/in/stan1000">LinkedIn</a></li>
                    <li className="menu-item"><a href="https://www.github.com/Aethervial">GitHub</a></li>
                    <li><a href="#">|</a></li>
                    <li className="menu-item"></li>
                    <li className="menu-item" ><Link to="/login">Log In</Link></li>
                    <li className="menu-item"><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    <div className="main">
        <div className="main-content-1">Music for someone!</div>
        <div className="main-content-2">Generic Vaporwave Background! Only a few songs!</div>
        <Link to="/login"  className="main-content-3">Log In</Link>
        <Link to="/signup" className="main-content-3">Sign Up</Link>
    </div>
    {/* <div className="footer">
        <div className="list-container">
            <div className="footer-list">
                <div id="logo">
                    <img src="assets/PBIcon.png"/>
                    <a id="apptitle">Vaporize</a>
                </div>
            </div>

            <div className="footer-list">
                <ul>
                    <li>Tech List</li>
                    <li>Ruby on Rails</li>
                    <li>PostgresQL</li>
                    <li>React / Redux</li>
                </ul>
            </div>

            <div className="footer-list">
                <ul>
                    <li>Contact Info</li>
                    <li>Linkedin</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
    </div> */}
</div>

)

export default SplashBody;