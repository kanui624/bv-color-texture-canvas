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
    { id: 1, color: '#463333', textColor: 'white' },
    { id: 2, color: '#835858', textColor: 'white' },
    { id: 3, color: '#cbe2b0', textColor: 'black' },
    { id: 4, color: '#ffeadb', textColor: 'black' },
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
