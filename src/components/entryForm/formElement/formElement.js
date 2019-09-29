import React from 'react';
import classes from './formElement.module.css';

const FormElement = props => {
    
    const chooseElement = (props) => {
        switch(props.type){
            case "checkbox": return checkbox;
            case "range": return range;

            default: return;
        }
    }

    const checkbox = (
    <div className={classes.input}>
      <label for={props.name}>{props.text}</label>
      <input
        type="checkbox"
        min="1"
        max="10"
        step="0.5"
        defaultValue="5"
        name={props.name}
      ></input>
    </div>
  );

  const range = (
    <div className={classes.input}>
      <label for={props.name}>{props.text}</label>
      <input
        type="range"
        min="1"
        max="10"
        step="0.5"
        defaultValue="5"
        name={props.name}
      ></input>
    </div>
  );

  return <div className={classes.main}>{chooseElement(props)}</div>;
};

export default FormElement;
