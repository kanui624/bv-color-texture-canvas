// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import Quadrants from '../components/Quadrants';

// CSS
import feelingThreeStyles from '../styles/feelingThree.module.css';

const feelingThree = () => {
  const colorArr = 
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

export default feelingThree;
