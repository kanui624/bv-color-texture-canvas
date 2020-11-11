// Next Components
import Head from 'next/head';

// Components
import Quadrants from '../components/Quadrants';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

const PaletteThree = () => {
  const colorArr: ColorArray[] = [
    {
      id: 1,
      color: '#d49a89',
      fontFamily: 'Thasadith, sans-serif',
    },
    {
      id: 2,
      color: '#bedbbb',
      fontFamily: 'Patrick Hand, cursive',
    },
    {
      id: 3,
      color: '#8fc0a9',
      fontFamily: 'Annie Use Your Telescope, cursive',
    },
    {
      id: 4,
      color: '#decdc3',
      fontFamily: 'Delius, cursive',
    },
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
