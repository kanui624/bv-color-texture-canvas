// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import Quadrants from '../components/Quadrants';

// CSS
import feelingOneStyles from '../styles/feelings-styles/feelingOne.module.css';

const feelingOne = () => {
  return (
    <>
      <Head>
        <title>Feeling Palette One</title>
      </Head>
      <Layout cName="container mx-auto">
        <Quadrants />
      </Layout>
    </>
  );
};

export default feelingOne;
