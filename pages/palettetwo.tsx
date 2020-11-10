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
    { id: 1, color: '#16A596', textColor: 'white' },
    { id: 2, color: '#898b8a', textColor: 'white' },
    { id: 3, color: '#fae0df', textColor: 'white' },
    { id: 4, color: '#f6f5f1', textColor: 'white' },
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
