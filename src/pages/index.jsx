import fetch from 'node-fetch';

const Index = ({ stars, build_time }) => {
  return 'index';
};

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  const stars = json.stargazers_count;
  // 現在時刻の取得
  const build_time = new Date().toString();

  return {
    props: {
      stars,
      build_time,
    },
  };
}
export default Index;
