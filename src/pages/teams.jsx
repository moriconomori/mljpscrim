import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { indigo } from '@material-ui/core/colors';

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
  logo: {
    display: 'block',
    width: '100%',
    height: 'auto',
    backgroundColor: indigo[500],
  },
}));

const Teams = ({ teams }) => {
  const classes = useStyles();

  return (
    <Box m={1}>
      <Grid container spacing={1}>
        {teams.map((team) => (
          <Grid item xs={6} sm={3} key={team.name} className={classes.item}>
            <Paper square className={classes.card}>
              <img
                src={
                  team.logoUrl
                    ? `/images/logos/${team.logoUrl}.jpg`
                    : '/images/logos/default.png'
                }
                alt={team.name}
                className={classes.logo}
              />
              <Box className={classes.nameWrap}>
                <Typography
                  variant="caption"
                  color="primary"
                  className={classes.name}
                >
                  [{team.tag}]
                </Typography>{' '}
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.name}
                >
                  {team.name}
                </Typography>
              </Box>
            </Paper>
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
