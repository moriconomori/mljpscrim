import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { indigo } from '@material-ui/core/colors';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
  },
  item: {
    display: 'flex',
  },
  nameWrap: {
    wordBreak: 'break-word',
    padding: theme.spacing(1),
  },
  name: {
    [theme.breakpoints.down('xs')]: {
      lineHeight: '1em',
    },
  },
}));

const logoStyles = makeStyles({
  logo: {
    paddingTop: '100%',
    backgroundColor: indigo[500],
    backgroundSize: 'cover',
  },
});

const Logo = (logoName) => {
  const classes = logoStyles();

  const logoUrl = ({ logoName }) => {
    const dir = '/images/logos/';
    const defaultLogo = dir + 'default.png';

    if (logoName !== '') {
      return dir + logoName + '.jpg';
    } else {
      return defaultLogo;
    }
  };

  return (
    <div
      className={classes.logo}
      style={{ backgroundImage: `url(${logoUrl(logoName)})` }}
    />
  );
};

const Teams = ({ teams }) => {
  const classes = useStyles();

  return (
    <Box m={1}>
      <Head>
        <title>Teams | MLJP SCRIM</title>
      </Head>

      <Grid container spacing={1}>
        {teams.map((team) => (
          <Grid item xs={6} sm={3} key={team.name} className={classes.item}>
            <Link href="/teams/[teamid]" as={`/teams/${team.uid}`}>
              <Paper square className={classes.card}>
                <Logo logoName={team.logoUrl} />
                <Box className={classes.nameWrap}>
                  <Typography
                    variant="caption"
                    color="primary"
                    className={classes.name}
                  >
                    [{team.tag}]
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.name}
                  >
                    {team.name}
                  </Typography>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

Teams.propTypes = {
  teams: PropTypes.array,
};

export async function getStaticProps() {
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbxtkRN9bqBbUyUj43B7epmVTkMz0LT5JK2Jx6qjxNuux2FZV4uu/exec'
  );
  const teams = await res.json();

  return {
    props: {
      teams,
    },
  };
}

export default Teams;
