// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import Quadrants from '../components/Quadrants';

// CSS
import feelingOneStyles from '../styles/feelings-styles/feelingOne.module.css';

const feelingOne = () => {
  const colorArr = [
    { id: 1, color: '#16A596' },
    { id: 2, color: '#898b8a' },
    { id: 3, color: '#fae0df' },
    { id: 4, color: '#f6f5f1' },
    { id: 5, color: 'one' },
    { id: 6, color: 'one' },
    { id: 7, color: 'one' },
    { id: 8, color: 'one' },
    { id: 9, color: 'one' },
  ];
  return (
    <>
      <Head>
        <title>Feeling Palette One</title>
      </Head>
      <Layout cName="container mx-auto">
        <Quadrants colors={colorArr} />
      </Layout>
    </>
  );
};

export default feelingOne;