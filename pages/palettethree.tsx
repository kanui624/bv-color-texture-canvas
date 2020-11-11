// Next Components
import Head from 'next/head';

// Components
import Quadrants from '../components/Quadrants';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

// CSS

const PaletteThree = () => {
  const colorArr: ColorArray[] = [
    {
      id: 1,
      color: '#d49a89',
      textColor: 'white',
      fontFamily: 'Thasadith, sans-serif',
    },
    {
      id: 2,
      color: '#bedbbb',
      textColor: 'black',
      fontFamily: 'Patrick Hand, cursive',
    },
    {
      id: 3,
      color: '#8fc0a9',
      textColor: 'white',
      fontFamily: 'Annie Use Your Telescope, cursive',
    },
    {
      id: 4,
      color: '#decdc3',
      textColor: 'black',
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
