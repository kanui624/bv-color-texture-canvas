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

const PaletteTwo = () => {
  const colorArr: ColorArray[] = [
    { id: 1, color: '#463333', textColor: '#835858' },
    { id: 2, color: '#835858', textColor: '#463333' },
    { id: 3, color: '#ebd4d4', textColor: '#835858' },
    { id: 4, color: '#fff0f0', textColor: '#463333' },
  ];
  return (
    <>
      <Head>
        <title>Palette Two</title>
      </Head>
      <Layout cName="container mx-auto">
        <NavLinks />
        <Quadrants colors={colorArr} />
      </Layout>
    </>
  );
};

export default PaletteTwo;
