// Next Components
import Head from 'next/head';

// Components
import Quadrants from '../components/Quadrants';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

const PaletteOne = () => {
  const colorArr: ColorArray[] = [
    {
      id: 1,
      color: '#463333',
      fontFamily: 'Annie Use Your Telescope, cursive',
    },
    {
      id: 2,
      color: '#cbe2b0',
      fontFamily: 'Comic Neue, cursive',
    },
    {
      id: 3,
      color: '#f5f1da',
      fontFamily: 'Delius, cursive',
    },
    {
      id: 4,
      color: '#ebcfc4',
      fontFamily: 'Pangolin, cursive',
    },
  ];
  return (
    <>
      <Head>
        <title>Palette One</title>
      </Head>
      <Quadrants colors={colorArr} />
    </>
  );
};

export default PaletteOne;
