import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TheBottomNavigation from '../components/TheBottomNavigation';

const Default = ({ children }) => {
  const useStyles = makeStyles({
    footer: {
      paddingBottom: 56,
    },
  });

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="default">
        <Toolbar>MLJP SCRIM</Toolbar>
      </AppBar>
      <main>{children}</main>
      <footer className={classes.footer}>footer</footer>
      <TheBottomNavigation />
    </React.Fragment>
  );
};

Default.propTypes = {
  children: PropTypes.element,
};

export default Default;
