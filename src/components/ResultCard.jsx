import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@mdi/react';
import { mdiClockOutline, mdiSwordCross } from '@mdi/js';
import { indigo } from '@material-ui/core/colors';
import Link from 'next/link';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  statWrap: {
    margin: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
    '&:not(:last-child)': {
      borderBottom: `1px solid ${theme.palette.background.paper}`,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    '& svg': {
      marginRight: theme.spacing(0.5),
    },
    '& svg path': {
      fill: theme.palette.text.secondary,
    },
  },
  date: {
    marginRight: theme.spacing(2),
  },
  versusWrap: {
    display: 'flex',
    padding: theme.spacing(0.5, 0),
  },
  teamNameLabel: {
    fontSize: theme.typography.h6.fontSize,
    margin: theme.spacing(0, 1),
  },
  teamLeft: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    wordBreak: 'break-word',
  },
  teamRight: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    wordBreak: 'break-word',
  },
  score: {
    minWidth: '3em',
    padding: theme.spacing(0, 0.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: theme.typography.h6.fontSize,
  },
  victoryWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  victoryLeft: {
    width: '100%',
    textAlign: 'right',
  },
  victoryRight: {
    width: '100%',
  },
  victoryDevider: {
    minWidth: '3em',
    fontSize: theme.typography.h6.fontSize,
  },
}));

const ResultCard = ({ stat }) => {
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

  const Victory = ({ isVictory }) => {
    const useStyles = makeStyles((theme) => ({
      label: {
        fontSize: theme.typography.h6.fontSize,
        color: isVictory
          ? theme.palette.error.main
          : theme.palette.text.secondary,
      },
    }));

    const classes = useStyles();

    const label = isVictory ? 'VICTORY' : 'DEFEAT';

    return <span className={classes.label}>{label}</span>;
  };

  Victory.propTypes = {
    isVictory: PropTypes.bool,
  };

  return (
    <div key={stat.uid} className={classes.statWrap}>
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <Icon path={mdiClockOutline} size="1em" />
          <span className={classes.date}>{stat.date}</span>

          <Icon path={mdiSwordCross} size="1em" />
          <span>BO{stat.bo}</span>
        </Grid>

        <Grid item xs={12} className={classes.versusWrap}>
          <Link href="/teams/[teamid]" as={`/teams/${stat.teamInfoLeft.uid}`}>
            <CardActionArea component="div">
              <div className={classes.teamLeft}>
                <Logo logoName={stat.teamInfoLeft.logoUrl} />
                <span className={classes.teamNameLabel}>
                  [{stat.teamInfoLeft.tag}]
                </span>
              </div>
            </CardActionArea>
          </Link>

          <div className={classes.score}>
            <span>{stat.teamInfoLeft.score}</span>
            <span>&ndash;</span>
            <span>{stat.teamInfoRight.score}</span>
          </div>

          <Link href="/teams/[teamid]" as={`/teams/${stat.teamInfoRight.uid}`}>
            <CardActionArea component="div">
              <div className={classes.teamRight}>
                <Logo logoName={stat.teamInfoRight.logoUrl} />
                <span className={classes.teamNameLabel}>
                  [{stat.teamInfoRight.tag}]
                </span>
              </div>
            </CardActionArea>
          </Link>
        </Grid>

        <Grid item xs={12} className={classes.victoryWrap}>
          <div className={classes.victoryLeft}>
            <Victory isVictory={stat.teamInfoLeft.isVictory} />
          </div>
          <div className={classes.victoryDevider} />
          <div className={classes.victoryRight}>
            <Victory isVictory={stat.teamInfoRight.isVictory} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

ResultCard.propTypes = {
  stat: PropTypes.object,
};

export default ResultCard;
