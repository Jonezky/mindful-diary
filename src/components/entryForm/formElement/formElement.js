import React from 'react';
import classes from './formElement.module.css';

const FormElement = () => {
    return (
        <div className={classes.main}>
            Form element
            <div className={classes.input}>
            <label for="happiness">Overall happiness</label>
            <input type="range" min="1" max="10" step="0.5" value="5"name="happiness"></input>
            </div>        
        </div>
    )
}

export default FormElement;