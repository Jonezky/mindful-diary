import React from 'react';
import {Link} from 'react-router-dom';
import classes from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/entries">Entries</Link>
                </li>
                <li>
                    <Link to="/insights">Insights</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;