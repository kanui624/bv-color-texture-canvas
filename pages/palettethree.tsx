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
    { id: 1, color: '#01C5C4', textColor: 'white' },
    { id: 2, color: '#B8DE6F', textColor: 'white' },
    { id: 3, color: '#F1E189', textColor: 'white' },
    { id: 4, color: '#F39233', textColor: 'white' },
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
