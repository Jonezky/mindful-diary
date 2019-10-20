import React from 'react';
import classes from './formElement.module.css';
import {Field} from 'react-final-form';

const FormElement = props => {
  const chooseElement = props => {
    switch (props.type) {
      case 'checkbox':
        return checkbox;
      case 'range':
        return range;
      case 'notes':
        return notes;

      default:
        return;
    }
  };

  const notes = (
    <div className={classes.notes}>
      <label for="notes">Notes</label>
      <div className={classes.noteboxContainer}>
      <Field className={classes.notebox} id="notes" name="notes" component="textarea" placeholder={props.placeholder} />
    </div>
    </div>
  );

  const checkbox = (
    <div className={classes.input}>
      <label for={props.name}>{props.text}</label>
      <Field
        name={props.name}
        id={props.name}
        component="input"
        type="checkbox"
      />
    </div>
  );

  const range = (
    <div className={classes.input}>
      <label for={props.name}>{props.text}</label>
      <Field
        name={props.name}
        id={props.name}
        component="input"
        type="range"
        min="0"
        max="10"
        step="0.5"
        defaultValue="5"
      />
    </div>
  );

  return chooseElement(props);
};

export default FormElement;
