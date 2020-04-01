import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import NewsList from '../components/NewsList';

const News = ({ news }) => {
  return (
    <React.Fragment>
      <Head>
        <title>News | MLJP SCRIM</title>
      </Head>

      <NewsList news={news} />
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
