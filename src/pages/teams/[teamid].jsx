import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';

const Team = ({ team }) => {
  return <p>{team.teamInfo.name}</p>;
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
