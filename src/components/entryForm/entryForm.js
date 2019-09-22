import React from 'react';
import classes from './entryForm.module.css';
import FormElement from './formElement/formElement';

const EntryForm = () => {
    return (
        <div className={classes.main}>
            <FormElement />
            <FormElement />
        </div>
    )
}

export default EntryForm;