import n from '../css/Navbar.module.css';
import React from "react";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return <ul className={n.nul}>
        <li><NavLink className={n.active} to="home">Home</NavLink></li>
        <li><NavLink to="messages">Messages</NavLink></li>
        <li><NavLink to="friends">Friends</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
        <li><NavLink to="login">Log in</NavLink></li>
    </ul>
};

export default Navbar;