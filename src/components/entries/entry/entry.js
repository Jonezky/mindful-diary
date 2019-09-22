import React from 'react';
import classes from './entry.module.css';

const Entry = (props) => {
    return (
        <div className={classes.main}>
            {props.data.note}
        </div>
    )
}

export default Entry;