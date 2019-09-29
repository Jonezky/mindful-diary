import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/entries">Entries</NavLink>
                </li>
                <li>
                    <NavLink to="/insights">Insights</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;