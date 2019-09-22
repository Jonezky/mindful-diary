import React from 'react';
import Header from '../header/header';
import classes from './layout.module.css';
import Diary from '../../hoc/Diary/diary';


const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.mainContent}>
        <Diary />
      </div>
    </div>
  );
};

export default Layout;
