// Next Components
import Head from 'next/head';

// Components
import Quadrants from '../components/Quadrants';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

// CSS

const PaletteThree = () => {
  const colorArr: ColorArray[] = [
    { id: 1, color: '#835858', textColor: 'white' },
    { id: 2, color: '#bedbbb', textColor: 'black' },
    { id: 3, color: '#89beb3', textColor: 'white' },
    { id: 4, color: '#f5dea3', textColor: 'black' },
  ];

  return (
    <>
      <Head>
        <title>Palette Three</title>
      </Head>
      <Quadrants colors={colorArr} />
    </>
  );
};

export default PaletteThree;
