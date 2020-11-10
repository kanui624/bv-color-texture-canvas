// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import NavLinks from '../components/NavLinks';
import Quadrants from '../components/Quadrants';

// CSS

const feelingThree = () => {
  const colorArr = [
    { id: 1, color: '#01C5C4' },
    { id: 2, color: '#B8DE6F' },
    { id: 3, color: '#F1E189' },
    { id: 4, color: '#F39233' },
    { id: 5, color: '#01C5C4' },
    { id: 6, color: '#B8DE6F' },
    { id: 7, color: '#F1E189' },
    { id: 8, color: '#F39233' },
    { id: 9, color: '#01C5C4' },
  ];

  return (
    <>
      <Head>
        <title>Feeling Palette One</title>
      </Head>
      <Layout cName="container mx-auto">
        <NavLinks />
        <Quadrants colors={colorArr} />
      </Layout>
    </>
  );
};

export default feelingThree;
