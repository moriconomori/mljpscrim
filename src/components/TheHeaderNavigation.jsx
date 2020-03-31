import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Icon from '@mdi/react';
import { mdiHome, mdiAccountGroup, mdiTrophy, mdiNewspaper } from '@mdi/js';
import Router, { useRouter } from 'next/router';

const TheHeaderNavigation = () => {
  const router = useRouter();

  const useStyles = makeStyles((theme) => ({
    headerNavi: {
      height: 64,
      display: 'none',
      '@media  (min-width: 600px)': {
        display: 'block',
      },
      '& .MuiTabs-fixed': {
        height: '100%',
      },
      '& .MuiTabs-flexContainer': {
        height: '100%',
      },
      '& .MuiTab-root': {
        minHeight: 56,
        padding: 0,
        lineHeight: '1em',
        '@media (min-width: 600px)': {
          minWidth: 100,
        },
      },
      '& .MuiTab-labelIcon .MuiTab-wrapper > *:first-child': {
        marginBottom: 0,
        marginRight: 8,
      },
      '& .MuiTab-wrapper': {
        flexDirection: 'row',
      },
      '& .MuiTab-root svg path': {
        fill: theme.palette.text.secondary,
      },
      '& .MuiTab-root.Mui-selected svg path': {
        fill: theme.palette.primary.main,
      },
    },
    displayNone: {
      display: 'none',
    },
  }));

  const classes = useStyles();

  const getTabValue = (path) => {
    if (path.startsWith('/teams')) {
      return '/teams';
    }
    return path;
  };

  const [currentPathName, setCurrentPathName] = useState(
    getTabValue(router.pathname)
  );

  useEffect(() => {
    const handleRouteChange = (path) => {
      setCurrentPathName(getTabValue(path));
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
    <Tabs
      value={currentPathName}
      onChange={handleChange}
      indicatorColor="primary"
      textColor="primary"
      aria-label="header navigation"
      className={classes.headerNavi}
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
        className={classes.displayNone}
      />
      <Tab
        icon={<Icon path={mdiNewspaper} size={1} />}
        label="お知らせ"
        value="/news"
        onClick={() => Router.push('/news')}
      />
      <Tab value="/about" className={classes.displayNone} />
      <Tab value="/contact" className={classes.displayNone} />
    </Tabs>
  );
};

export default TheHeaderNavigation;
