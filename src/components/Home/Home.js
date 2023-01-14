import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import ThemeContext from '../../store/theme-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const authCtx = useContext(AuthContext);
  const themeCtx = useContext(ThemeContext);

  console.log('Home is being redrawn. Theme:', themeCtx.theme);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
      <p>Theme is {themeCtx.theme}</p>
    </Card>
  );
};

export default Home;
