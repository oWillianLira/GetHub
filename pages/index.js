import Head from 'next/head';

import Header from '../components/Header';
import Logo from '../public/gethub.svg';

export default function Home() {
  const changeMode = () => {
    document.querySelector('body').classList.toggle('dark');
  };

  return (
    <>
      <Head>
        <title>GetHub</title>
        <link rel="shortcut icon" href="./gethub.svg" />
      </Head>

      <div className="h-screen bg-gray-50 mode dark:bg-nightView overflow-hidden">
        <Header logo={Logo} mode={changeMode} />
      </div>
    </>
  );
}
