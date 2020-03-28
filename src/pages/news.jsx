import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const News = ({ news }) => {
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

      <span>News</span>
      <NoData />
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
