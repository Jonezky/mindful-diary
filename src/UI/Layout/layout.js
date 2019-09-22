import React from 'react';
import Header from '../header/header';
import classes from './layout.module.css';
import Diary from '../../hoc/Diary/diary';
import {BrowserRouter as Router} from 'react-router-dom';


const Layout = (props) => {
  return (
    <Router>
    <div className={classes.layout}>
      <Header />
      <div className={classes.mainContent}>
        <Diary />
      </div>
    </div>
    </Router>
  );
};

export default Layout;
