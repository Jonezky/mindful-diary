import React from 'react';
import Entry from './entry/entry';
import classes from './entries.module.css';

const Entries = (props) => {
    const entries = props.entries;
    
        const renderEntries = (entries) => {
            return(
            entries.map((entry) => {
                console.log(entry);
                return (
                    <Entry data={entry} key={entry.id}/>
                )
            })
        );
    }

    return (
        <div className={classes.main}>
            <h2>Entries</h2>
            {renderEntries(entries)}
        </div>
    )
}

export default Entries;