import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Stats = ({ stats }) => {
  const NoData = () => {
    if (stats.length < 1) {
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
        <title>Stats | MLJP SCRIM</title>
      </Head>

      <span>Stats</span>
      <NoData />
    </React.Fragment>
  );
};

Stats.propTypes = {
  stats: PropTypes.array,
};

export async function getStaticProps() {
  const res = await fetch(
    'https://script.google.com/macros/s/AKfycbzHGIXhIr70kYpljKadfT_XMxBWo9wGSW73n9XbuhZi8uPFlyw/exec'
  );
  const stats = await res.json();

  return {
    props: {
      stats,
    },
  };
}

export default Stats;
