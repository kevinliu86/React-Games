import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    direction: 'row',
    justify: 'flex-start',
    alignItems: 'center',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar style={{ position: 'fixed', background: '#FFFFFF' }}>
        <Toolbar>
          <Grid container className={classes.title}>
            <Grid item>
              <img
                src={logo}
                alt="logo"
                style={{ width: '60px', height: '60px' }}
              />
            </Grid>
          </Grid>
          <Link to="/home">
            <Button className={classes.menuButton}>Home</Button>
          </Link>
          <Link to="/tictactoe">
            <Button className={classes.menuButton}>tictactoe</Button>
          </Link>
          <Link to="/tower">
            <Button className={classes.menuButton}>tower</Button>
          </Link>
          <Link to="/snek">
            <Button className={classes.menuButton}>snek</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
