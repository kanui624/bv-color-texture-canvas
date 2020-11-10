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

const PaletteOne = () => {
  const colorArr: ColorArray[] = [
    { id: 1, color: '#9AD3BC', textColor: '#ff9a8c' },
    { id: 2, color: '#ff9a8c', textColor: '#9AD3BC' },
    { id: 3, color: '#e79e4f', textColor: '#16a596' },
    { id: 4, color: '#16a596', textColor: '#e79e4f' },
  ];
  return (
    <>
      <Head>
        <title>Palette One</title>
      </Head>
      <Layout cName="container mx-auto">
        <NavLinks />
        <Quadrants colors={colorArr} />
      </Layout>
    </>
  );
};

export default PaletteOne;
