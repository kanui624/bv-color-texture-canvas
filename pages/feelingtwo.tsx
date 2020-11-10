// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import NavLinks from '../components/NavLinks';
import Quadrants from '../components/Quadrants';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

// CSS
import feelingTwoStyles from '../styles/feelingTwo.module.css';

const feelingTwo = () => {
  const colorArr: ColorArray[] = [
    { id: 1, color: '#16A596' },
    { id: 2, color: '#898b8a' },
    { id: 3, color: '#fae0df' },
    { id: 4, color: '#f6f5f1' },
    { id: 5, color: '#16A596' },
    { id: 6, color: '#898b8a' },
    { id: 7, color: '#fae0df' },
    { id: 8, color: '#f6f5f1' },
    { id: 9, color: '#16A596' },
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

export default feelingTwo;
