import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Icon from '@mdi/react';
import { mdiLinkVariant } from '@mdi/js';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  teamHeader: {
    display: 'flex',
  },
  logoWrap: {
    width: '30%',
    maxWidth: '240px',
  },
  nameWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(1, 2),
    wordBreak: 'break-word',
  },
  teamName: {
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  item: {
    [theme.breakpoints.down('xs')]: {
      '&:not(:last-child) .MuiPaper-outlined': {
        borderBottomStyle: 'none',
      },
    },
    [theme.breakpoints.up('sm')]: {
      '&:nth-child(2n + 3) .MuiPaper-outlined': {
        borderTopStyle: 'none',
      },
      '&:nth-child(2n) .MuiPaper-outlined': {
        borderLeftStyle: 'none',
      },
      '&:nth-child(2n + 4) .MuiPaper-outlined': {
        borderTopStyle: 'none',
      },
    },
  },
  member: {
    height: '100%',
    padding: theme.spacing(1, 2),
  },
}));

const Roles = ({ roles }) => {
  const useStyles = makeStyles((theme) => ({
    roles: {
      color: theme.palette.text.secondary,
    },
    role: {
      margin: theme.spacing(0.5),
      color: theme.palette.text.secondary,
    },
  }));

  if (roles.length < 1) {
    return null;
  }

  const classes = useStyles();

  return (
    <div className={classes.roles}>
      Role
      {roles.map((role) => (
        <Chip label={role} size="small" key={role} className={classes.role} />
      ))}
    </div>
  );
};

Roles.propTypes = {
  roles: PropTypes.array,
};

const Links = ({ links }) => {
  const useStyles = makeStyles((theme) => ({
    links: {
      display: 'flex',
      alignItems: 'center',
      '& svg path': {
        fill: theme.palette.text.secondary,
      },
    },
  }));

  if (links.length < 1) {
    return null;
  }

  const classes = useStyles();

  return (
    <div className={classes.links}>
      <Icon path={mdiLinkVariant} size={1} />
      {links.map((link) => (
        <IconButton aria-label={link.site} key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="gtag-event"
          >
            <Avatar>
              <img
                src={`/images/icons/${link.site}-120x120.png`}
                width="40"
                height="40"
              />
            </Avatar>
            <span style={{ display: 'none' }}>{link.site}</span>
          </a>
        </IconButton>
      ))}
    </div>
  );
};

Links.propTypes = {
  links: PropTypes.array,
};

const Team = ({ team }) => {
  const classes = useStyles();

  const Logo = (logoName) => {
    const useStyles = makeStyles({
      logo: {
        width: '100%',
        paddingTop: '100%',
        backgroundColor: indigo[500],
        backgroundSize: 'cover',
      },
    });

    const classes = useStyles();

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
        style={{ backgroundImage: `url(${logoUrl(logoName)})` }}
        className={classes.logo}
      />
    );
  };

  return (
    <React.Fragment>
      <Head>
        <title>{team.teamInfo.name} | Teams | MLJP SCRIM</title>
      </Head>

      <Paper square>
        <div className={classes.teamHeader}>
          <div className={classes.logoWrap}>
            <Logo logoName={team.teamInfo.logoUrl} />
          </div>
          <div className={classes.nameWrap}>
            <Typography variant="body1" color="primary">
              [{team.teamInfo.tag}]
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              className={classes.teamName}
            >
              {team.teamInfo.name}
            </Typography>
          </div>
        </div>
      </Paper>
      <Box textAlign="right" p={1}>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          参加日 {team.teamInfo.joinedAt}
        </Typography>
      </Box>
      <Typography variant="h6" component="h2" color="primary" gutterBottom>
        メンバー
      </Typography>
      <Grid container className={classes.members}>
        {team.members.map((member) => (
          <Grid item xs={12} sm={6} key={member.name} className={classes.item}>
            <Paper
              variant="outlined"
              square
              key={member.name}
              className={classes.member}
            >
              <Typography variant="h6">{member.name}</Typography>
              <Roles roles={member.roles} />
              <Links links={member.links} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

Team.propTypes = {
  team: PropTypes.object,
};

export async function getStaticPaths() {
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbxtkRN9bqBbUyUj43B7epmVTkMz0LT5JK2Jx6qjxNuux2FZV4uu/exec'
  );
  const teams = await res.json();
  const paths = teams.map((team) => `/teams/${team.uid}`);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const teamid = params.teamid;
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbxlbEeWkJtQJaEIbKuuudYHcSXv_MmKSDK1zewcmNU_gwKyg5Y/exec'
  );
  const json = await res.json();
  const team = json[teamid];

  return { props: { team } };
}

export default Team;
