import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import NewsList from '../components/NewsList';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  moreNews: {
    paddingRight: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& svg path': {
      fill: theme.palette.primary.main,
    },
  },
}));

const Index = ({ scrims, news }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        px={1}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" component="h2" color="primary">
          お知らせ
        </Typography>
        <Link href="/news">
          <Button
            color="primary"
            startIcon={<Icon path={mdiChevronRight} size={1} />}
            disableRipple
            className={classes.moreNews}
          >
            もっと見る
          </Button>
        </Link>
      </Box>
      <NewsList news={news} />
    </React.Fragment>
  );
};

Index.propTypes = {
  scrims: PropTypes.array,
  news: PropTypes.array,
};

export async function getStaticProps() {
  let res;
  res = await fetch(
    'https://script.google.com/macros/s/AKfycbwOkwCt2nIyKLpJnR68Unl6UuovCEFevEZQ-ZPIjpdMhbCA9dnd/exec'
  );
  const scrims = await res.json();

  res = await fetch(
    'https://script.google.com/macros/s/AKfycbwmFnoU79NeiTjFWjrB_myQvTEZUohJrlD9S6TTSAGROq0qLqM/exec'
  );
  const news = await res.json();

  return {
    props: {
      scrims,
      news,
    },
  };
}

export default Index;
