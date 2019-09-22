import React from 'react';
import Header from '../header/header';
import classes from './layout.module.css';
import Entries from '../../components/entries/entries';
import EntryForm from '../../components/entryForm/entryForm';
import Insights from '../../components/insights/insights';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className={classes.mainContent}>
        <EntryForm />
        <Entries />
        <Insights />
      </div>
    </div>
  );
};

export default Layout;
