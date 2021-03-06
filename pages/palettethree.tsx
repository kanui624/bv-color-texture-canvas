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
      color: '#fff8cd',
      fontFamily: 'Thasadith, sans-serif',
    },
    {
      id: 2,
      color: '#ffdd93',
      fontFamily: 'Patrick Hand, cursive',
    },
    {
      id: 3,
      color: '#cbaf87',
      fontFamily: 'Annie Use Your Telescope, cursive',
    },
    {
      id: 4,
      color: '#463333',
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
