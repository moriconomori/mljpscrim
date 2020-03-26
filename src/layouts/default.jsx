import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TheBottomNavigation from '../components/TheBottomNavigation';
import TheHeaderNavigation from '../components/TheHeaderNavigation';

const Default = ({ children }) => {
  const useStyles = makeStyles({
    footer: {
      paddingBottom: 56,
      '@media  (min-width: 600px)': {
        paddingBottom: 0,
      },
    },
    toolber: {
      justifyContent: 'space-between',
    },
  });

  const classes = useStyles();

  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener(
      'resize',
      function () {
        setWidth(window.innerWidth);
      },
      true
    );
    return function () {
      null;
    };
  });

  return (
    <React.Fragment>
      <AppBar position={width < 600 ? 'static' : 'sticky'} color="default">
        <Toolbar className={classes.toolber}>
          <span>MLJP SCRIM</span>
          <TheHeaderNavigation />
        </Toolbar>
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
