// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import Quadrants from '../components/Quadrants';

// CSS
import feelingTwoStyles from '../styles/feelingTwo.module.css';

const feelingTwo = () => {
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

export default feelingTwo;
