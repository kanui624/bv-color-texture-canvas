// Next Components
import Head from 'next/head';

// Components
import Quadrants from '../components/Quadrants';

// CSS
import feelingThreeStyles from '../styles/feelingThree.module.css';

const feelingThree = () => {
  return (
    <Head>
      <title>Feeling Palette Three</title>
      <Quadrants />
    </Head>
  );
};

export default feelingThree;
