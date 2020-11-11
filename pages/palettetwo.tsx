// Next Components
import Head from 'next/head';

// Components
import Quadrants from '../components/Quadrants';

// Interfaces
import ColorArray from '../interfaces/ColorArray';

// CSS
import feelingTwoStyles from '../styles/feelingTwo.module.css';

const PaletteTwo = () => {
  const colorArr: ColorArray[] = [
    {
      id: 1,
      color: '#cbbcb1',
      textColor: 'white',
      fontFamily: 'Patrick Hand, cursive',
    },
    {
      id: 2,
      color: '#835858',
      textColor: 'white',
      fontFamily: 'Annie Use Your Telescope, cursive',
    },
    {
      id: 3,
      color: '#cbe2b0',
      textColor: 'black',

      fontFamily: 'Thasadith, sans-serif',
    },
    {
      id: 4,
      color: '#39311d',
      textColor: 'white',
      fontFamily: 'Comic Neue, cursive',
    },
  ];
  return (
    <>
      <Head>
        <title>Palette Two</title>
      </Head>
      <Quadrants colors={colorArr} />
    </>
  );
};

export default PaletteTwo;
