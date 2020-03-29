import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TheBottomNavigation from '../components/TheBottomNavigation';
import TheHeaderNavigation from '../components/TheHeaderNavigation';
import TheFooter from '../components/TheFooter';

const Default = ({ children }) => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    toolber: {
      justifyContent: 'space-between',
    },
    title: {
      display: 'flex',
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
      <div className={classes.root}>
        <div>
          <AppBar position={width < 600 ? 'static' : 'sticky'} color="default">
            <Container maxWidth="md" disableGutters>
              <Toolbar className={classes.toolber}>
                <div className={classes.title}>
                  <img
                    src="/images/logos/mljpscrim-108x108.png"
                    alt="MLJP SCRIM"
                    width="36"
                    height="36"
                  />
                </div>
                <TheHeaderNavigation />
              </Toolbar>
            </Container>
          </AppBar>
          <main>
            <Container maxWidth="md" disableGutters>
              {children}
            </Container>
          </main>
        </div>
        <TheFooter />
      </div>
      <TheBottomNavigation />
    </React.Fragment>
  );
};

Default.propTypes = {
  children: PropTypes.element,
};

export default Default;
