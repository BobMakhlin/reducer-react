import React from 'react';

import Navigation from './Navigation';
import Settings from './Settings';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation />
      <Settings />
    </header>
  );
  // could be moved to Settings component.
};

export default MainHeader;
