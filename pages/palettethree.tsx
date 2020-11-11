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
    { id: 1, color: '#835858', textColor: 'white' },
    { id: 2, color: '#bedbbb', textColor: 'white' },
    { id: 3, color: '#89beb3', textColor: 'white' },
    { id: 4, color: '#fff3e2', textColor: 'black' },
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
