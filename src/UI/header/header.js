import React from 'react';
import classes from './header.module.css';
import Navbar from '../../components/navbar/navbar';

const Header = () => {
    return (
        <header className={classes.header}>
            <Navbar />
        </header>
    )
}

export default Header;