import React from 'react';
import classes from './entryForm.module.css';
import FormElement from './formElement/formElement';
import {Form, Field} from 'react-final-form';

const EntryForm = () => {
  const oldForm = (
    <div className={classes.main}>
      <h2>New Entry</h2>
      <FormElement type="range" name="happiness" text="Overall happiness" />
      <FormElement type="range" name="sleep" text="Sleep" />
      <FormElement
        type="checkbox"
        name="meditation"
        text="Did you meditate today?"
      />
    </div>
  );

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  const newForm = (
    <>
      <div className={classes.main}>
        <h2>New Entry</h2>
        <Form
          onSubmit={onSubmit}
          initialValues={{happiness: 5, sleep: 5, meditation: false}}
          render={({handleSubmit, form, submitting, pristine, values}) => (
            <form onSubmit={handleSubmit}>
              <FormElement
                type="checkbox"
                name="meditation"
                text="Meditation"
              />

              <FormElement
                type="range"
                name="happiness"
                text="Overall happiness"
              />

              <FormElement
                type="range"
                name="sleep"
                text="Sleep quality"
              />

              <FormElement type="notes" placeholder="Notes" />

              <div className={classes.buttons}>
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>

                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
              <div className={classes.preview}>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </div>
            </form>
          )}
        />
      </div>
    </>
  );

  return newForm;
};

export default EntryForm;
