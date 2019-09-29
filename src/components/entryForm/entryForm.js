import React from 'react';
import classes from './entryForm.module.css';
import FormElement from './formElement/formElement';

const EntryForm = () => {
    return (
        <div className={classes.main}>
            <h2>New Entry</h2>
            <FormElement type="range" name="happiness" text="Overall happiness"/>
            <FormElement type="range" name="sleep" text="Sleep" />
            <FormElement type="checkbox" name="meditation" text="Did you meditate today?"/>
        </div>
    )
}

export default EntryForm;