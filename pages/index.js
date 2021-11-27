import Head from 'next/head';

import Header from '../components/Header';
import Logo from '../public/gethub.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>GetHub</title>
        <link rel="shortcut icon" href="./gethub.svg" />
      </Head>

      <div className="h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Header logo={Logo} />
      </div>
    </>
  );
}
