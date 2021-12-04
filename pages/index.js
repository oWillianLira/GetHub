import { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Logo from '../public/gethub.svg';
import Login from '../components/Login';

export default function Screen() {
  const [darkMode, setDarkMode] = useState();

  const changeMode = (mode) => {
    mode
      ? document.querySelector('body').classList.add('dark')
      : document.querySelector('body').classList.remove('dark');
    setDarkMode(mode);
  };

  const toggleMode = () => {
    setDarkMode();
    window.localStorage.setItem('dark', !darkMode);
  };

  useEffect(() => {
    if (window.localStorage.getItem('dark') === null) {
      window.localStorage.setItem('dark', false);
      setDarkMode(false);
    } else changeMode(JSON.parse(window.localStorage.getItem('dark')));
  });

  return (
    <>
      <Head>
        <title>GetHub</title>
        <link rel="shortcut icon" href="./gethub.svg" />
      </Head>

      <div className="h-screen bg-gray-50 mode dark:bg-nightView overflow-hidden">
        <Header logo={Logo} mode={toggleMode} />
        <Login />
      </div>
    </>
  );
}
