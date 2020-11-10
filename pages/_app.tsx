// Types
import { AppProps } from 'next/app';

// CSS
import '../styles/tailwind.css';

// Components
import Layout from '../components/Layout';
import NavLinks from '../components/NavLinks';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <NavLinks />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
