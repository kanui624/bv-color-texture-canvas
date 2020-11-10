// Types
import { AppProps } from 'next/app';

// CSS
import '../styles/globals.css';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
