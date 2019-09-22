import React from 'react';
import Entry from './entry/entry';
import classes from './entries.module.css';

const Entries = () => {
    return (
        <div className={classes.main}>
            <h2>Entries</h2>
            <Entry />
            <Entry />
        </div>
    )
}

export default Entries;