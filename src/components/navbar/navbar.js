import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <NavLink exact to="/" className={classes.link} activeStyle={{color: 'white', textDecoration: 'underline'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/entries" className={classes.link} activeStyle={{color: 'white', textDecoration: 'underline'}}>Entries</NavLink>
                </li>
                <li>
                    <NavLink to="/insights" className={classes.link} activeStyle={{color: 'white', textDecoration: 'underline'}}>Insights</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;