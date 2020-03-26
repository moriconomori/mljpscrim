import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@mdi/react';
import { mdiHome, mdiAccountGroup, mdiTrophy, mdiNewspaper } from '@mdi/js';
import Router, { useRouter } from 'next/router';

const TheBottomNavigation = () => {
  const router = useRouter();

  const useStyles = makeStyles((theme) => ({
    bottomNavi: {
      '@media (min-width: 600px)': {
        display: 'none',
      },
      top: 'auto',
      bottom: 0,
      '& .MuiTab-root': {
        minHeight: 56,
        padding: 0,
        lineHeight: '1em',
      },
      '& .MuiTab-labelIcon .MuiTab-wrapper > *:first-child': {
        marginBottom: 0,
      },
      '& .MuiTabs-indicator': {
        display: 'none',
      },
      '& .MuiTab-root svg path': {
        fill: theme.palette.text.secondary,
      },
      '& .MuiTab-root.Mui-selected svg path': {
        fill: theme.palette.primary.main,
      },
    },
  }));

  const classes = useStyles();
  const [currentPathName, setCurrentPathName] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = (path) => {
      setCurrentPathName(path);
    };

    Router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  const handleChange = (event, newPath) => {
    setCurrentPathName(newPath);
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      className={classes.bottomNavi}
      component="div"
    >
      <Tabs
        value={currentPathName}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="bottom navigation"
      >
        <Tab
          icon={<Icon path={mdiHome} size={1} />}
          label="HOME"
          value="/"
          onClick={() => Router.push('/')}
        />
        <Tab
          icon={<Icon path={mdiAccountGroup} size={1} />}
          label="クラン"
          value="/teams"
          onClick={() => Router.push('/teams')}
        />
        <Tab
          icon={<Icon path={mdiTrophy} size={1} />}
          label="戦績"
          value="/stats"
          onClick={() => Router.push('/stats')}
        />
        <Tab
          icon={<Icon path={mdiNewspaper} size={1} />}
          label="お知らせ"
          value="/news"
          onClick={() => Router.push('/news')}
        />
      </Tabs>
    </AppBar>
  );
};

export default TheBottomNavigation;
