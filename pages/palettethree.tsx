// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import NavLinks from '../components/NavLinks';
import Quadrants from '../components/Quadrants';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

// CSS

const PaletteThree = () => {
  const colorArr: ColorArray[] = [
    { id: 1, color: '#01C5C4' },
    { id: 2, color: '#B8DE6F' },
    { id: 3, color: '#F1E189' },
    { id: 4, color: '#F39233' },
  ];

  return (
    <>
      <Head>
        <title>Palette Three</title>
      </Head>
      <Layout cName="container mx-auto">
        <NavLinks />
        <Quadrants colors={colorArr} />
      </Layout>
    </>
  );
};

export default PaletteThree;
