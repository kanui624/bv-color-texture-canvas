// Next Components
import Head from 'next/head';
// Types
import { AppProps } from 'next/app';

// CSS
import '../styles/globals.css';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&family=Comic+Neue&family=Delius&family=Pangolin&family=Patrick+Hand&family=Thasadith:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
