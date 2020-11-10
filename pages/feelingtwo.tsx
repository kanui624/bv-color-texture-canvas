// Next Components
import Head from 'next/head';

// Components
import Quadrants from '../components/Quadrants';

// CSS
import feelingTwoStyles from '../styles/feelingTwo.module.css';

const feelingTwo = () => {
  return (
    <Head>
      <title>Feeling Palette Two</title>
      <Quadrants />
    </Head>
  );
};

export default feelingTwo;
