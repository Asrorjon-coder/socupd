import React from "react";
import s from "./../css/Sidebar.module.css";
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    return <ul className={s.sul}>
        <li><NavLink to="news">News</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
    </ul>
};

export default Sidebar;