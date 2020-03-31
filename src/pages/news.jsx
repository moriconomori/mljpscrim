import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import { mdiClockOutline } from '@mdi/js';

const useStyles = makeStyles((theme) => ({
  news: {
    padding: theme.spacing(0.5),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing(0.5),
  },
  cardActionArea: {
    height: '100%',
  },
  article: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: theme.spacing(1),
  },
  header: {
    display: 'flex',
    alignItems: 'start',
  },
  title: {
    width: '100%',
    paddingRight: theme.spacing(1),
  },
  date: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    '& svg': {
      marginRight: theme.spacing(0.5),
    },
    '& svg path': {
      fill: theme.palette.text.secondary,
    },
  },
  body: {
    display: '-webkit-box',
    '-webkitBoxOrient': 'vertical',
    '-webkit-line-clamp': 2,
    overflow: 'hidden',
    minHeight: '2.85em',
  },
}));

const News = ({ news }) => {
  const classes = useStyles();

  const NoData = () => {
    if (news.length < 1) {
      return (
        <Container>
          <Box p={8} textAlign="center">
            データがありません
          </Box>
        </Container>
      );
    }

    return null;
  };

  return (
    <React.Fragment>
      <Head>
        <title>News | MLJP SCRIM</title>
      </Head>

      <NoData />

      <Grid container className={classes.news}>
        {news.map((article) => (
          <Grid item xs={12} sm={6} key={article.uid} className={classes.item}>
            <CardActionArea component="div" className={classes.cardActionArea}>
              <Paper
                square
                variant="outlined"
                key={article.uid}
                className={classes.article}
              >
                <div className={classes.header}>
                  <Typography
                    variant="subtitle1"
                    component="h2"
                    noWrap
                    className={classes.title}
                    gutterBottom
                  >
                    {article.title}
                  </Typography>
                  <div className={classes.date}>
                    <Icon path={mdiClockOutline} size="1em" />
                    {article.publishedAt}
                  </div>
                </div>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className={classes.body}
                >
                  {article.body}
                </Typography>
              </Paper>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

News.propTypes = {
  news: PropTypes.array,
};

export async function getStaticProps() {
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbzdg3_jf8jj5mwNYRmz8rVJ7JuVjCwhCmY7MTH0LBrmRD-4tKM/exec'
  );
  const news = await res.json();

  return {
    props: {
      news,
    },
  };
}

export default News;
