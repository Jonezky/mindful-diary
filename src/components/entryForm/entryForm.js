import React from 'react';
import classes from './entryForm.module.css';
import FormElement from './formElement/formElement';

const EntryForm = () => {
    return (
        <div className={classes.main}>
            <h2>New Entry</h2>
            <FormElement />
            <FormElement />
        </div>
    )
}

export default EntryForm;