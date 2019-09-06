import React from 'react';
import {Link} from 'react-router-dom';


const Greeting = ({currentUser, logout}) => {

    const loggedinLinks = () => (
        <nav>
            <h2>HELLO {currentUser.username}</h2>
            <button onClick = {logout}>Log out!</button>
        </nav>
    )

    const loginLinks = () => (
        <nav>
            <Link to='/signup'>Sign Up!</Link>
            <Link to='/login'>Log In</Link>
        </nav>
    )

    return currentUser ? loggedinLinks() : loginLinks();



}

export default Greeting;