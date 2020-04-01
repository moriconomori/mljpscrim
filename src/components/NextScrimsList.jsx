import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { indigo } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Link from 'next/link';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  scrim: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 0),
    margin: theme.spacing(0, 1),
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  date: {
    marginRight: theme.spacing(2),
  },
  versus: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
  },
  vsLabel: {
    padding: theme.spacing(0, 1),
  },
  teamLeft: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    textAlign: 'right',
  },
  teamRight: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
  },
  teamNameWrap: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0, 1),
  },
  teamName: {
    lineHeight: '1em',
    wordBreak: 'break-word',
  },
}));

const NextScrimsList = ({ scrims }) => {
  const classes = useStyles();

  const Logo = ({ logoName }) => {
    let dir = '/images/logos/';
    let url = dir;

    if (logoName === '') {
      url += 'default.png';
    } else {
      url += logoName + '.jpg';
    }

    const useStyles = makeStyles((theme) => ({
      logoWrap: {
        [theme.breakpoints.down('xs')]: {
          width: '56px',
        },
        [theme.breakpoints.up('sm')]: {
          width: '96px',
        },
      },
      logo: {
        width: '100%',
        paddingTop: '100%',
        backgroundColor: indigo[500],
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
      },
    }));

    const classes = useStyles();

    return (
      <div className={classes.logoWrap}>
        <div className={classes.logo} />
      </div>
    );
  };

  Logo.propTypes = {
    logoName: PropTypes.string,
  };

  return (
    <div>
      {scrims.map((scrim, index) => (
        <Paper square variant="outlined" key={index} className={classes.scrim}>
          <div className={classes.header}>
            <Typography variant="h6" className={classes.date}>
              {scrim.date}
            </Typography>
            <Typography variant="h6">BO{scrim.bo}</Typography>
          </div>
          <div className={classes.versus}>
            <Link
              href="/teams/[teamid]"
              as={`/teams/${scrim.teamInfoLeft.uid}`}
            >
              <CardActionArea component="div">
                <div className={classes.teamLeft}>
                  <div className={classes.teamLogo}>
                    <Logo logoName={scrim.teamInfoLeft.logoUrl} />
                  </div>
                  <div className={classes.teamNameWrap}>
                    <Typography color="primary" variant="caption">
                      [{scrim.teamInfoLeft.tag}]
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      className={classes.teamName}
                    >
                      {scrim.teamInfoLeft.name}
                    </Typography>
                  </div>
                </div>
              </CardActionArea>
            </Link>
            <div className={classes.vsLabel}>
              <Typography color="textSecondary">vs</Typography>
            </div>
            <Link
              href="/teams/[teamid]"
              as={`/teams/${scrim.teamInfoRight.uid}`}
            >
              <CardActionArea component="div">
                <div className={classes.teamRight}>
                  <div className={classes.teamLogo}>
                    <Logo logoName={scrim.teamInfoRight.logoUrl} />
                  </div>
                  <div className={classes.teamNameWrap}>
                    <Typography color="primary" variant="caption">
                      [{scrim.teamInfoRight.tag}]
                    </Typography>
                    <Typography
                      variant="body1"
                      component="span"
                      className={classes.teamName}
                    >
                      {scrim.teamInfoRight.name}
                    </Typography>
                  </div>
                </div>
              </CardActionArea>
            </Link>
          </div>
        </Paper>
      ))}
    </div>
  );
};

NextScrimsList.propTypes = {
  scrims: PropTypes.array,
};

export default NextScrimsList;
