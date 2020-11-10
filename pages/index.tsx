// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import NavLinks from '../components/NavLinks';
import Quadrants from '../components/Quadrants';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

// CSS
import feelingOneStyles from '../styles/feelings-styles/feelingOne.module.css';

const feelingOne = () => {
  const colorArr: ColorArray[] = [
    { id: 1, color: '#9AD3BC' },
    { id: 2, color: '#F3EAC2' },
    { id: 3, color: '#F5B461' },
    { id: 4, color: '#EC524B' },
    { id: 5, color: '#9AD3BC' },
    { id: 6, color: '#F3EAC2' },
    { id: 7, color: '#F5B461' },
    { id: 8, color: '#EC524B' },
    { id: 9, color: '#9AD3BC' },
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

export default feelingOne;
