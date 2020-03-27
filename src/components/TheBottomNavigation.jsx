import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { grey } from '@material-ui/core/colors';
import Icon from '@mdi/react';
import { mdiHome, mdiAccountGroup, mdiTrophy, mdiNewspaper } from '@mdi/js';
import Router, { useRouter } from 'next/router';

const TheBottomNavigation = () => {
  const router = useRouter();

  const useStyles = makeStyles((theme) => ({
    root: {
      '@media (min-width: 600px)': {
        display: 'none',
      },

      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: grey[900],

      '& svg path': {
        fill: theme.palette.text.secondary,
      },

      '& .Mui-selected svg path': {
        fill: theme.palette.primary.main,
      },
    },
  }));

  const classes = useStyles();

  const getNaviValue = (path) => {
    if (path.startsWith('/teams')) {
      return '/teams';
    }
    return path;
  };

  const [value, setValue] = useState(getNaviValue(router.pathname));

  useEffect(() => {
    const handleRouteChange = (path) => {
      setValue(getNaviValue(path));
    };

    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (router.pathname !== newValue) {
      router.push(newValue).then(() => {
        scrollToTop();
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        value="/"
        label="HOME"
        icon={<Icon path={mdiHome} size={1} />}
      />
      <BottomNavigationAction
        value="/teams"
        label="クラン"
        icon={<Icon path={mdiAccountGroup} size={1} />}
      />
      <BottomNavigationAction
        value="/stats"
        label="戦績"
        icon={<Icon path={mdiTrophy} size={1} />}
      />
      <BottomNavigationAction
        value="/news"
        label="お知らせ"
        icon={<Icon path={mdiNewspaper} size={1} />}
      />
    </BottomNavigation>
  );
};

export default TheBottomNavigation;
