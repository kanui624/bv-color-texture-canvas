// Next Components
import Head from 'next/head';

// Components
import Layout from '../components/Layout';

// CSS
import feelingOneStyles from '../styles/feelings-styles/feelingOne.module.css';

const feelingOne = () => {
  const styleBox = '';
  return (
    <Layout cName="container mx-auto">
      <Head>
        <title>Feeling Palette One</title>
      </Head>
      <div className="grid h-full grid-cols-2 col-auto grid-rows-2 row-auto">
        {}
        <div className="">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </Layout>
  );
};

export default feelingOne;
