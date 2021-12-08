import { useState, useEffect } from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Logo from '../public/gethub.svg';
import Login from '../components/Login';

export default function Main() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(Object);
  var baseUrl = `https://api.github.com/users/${username}`;

  useEffect(() => {
    if (document.querySelector('form#GH-login')) {
      username === ''
        ? document.querySelector('form#GH-login button#login').setAttribute('disabled', 'true')
        : document.querySelector('form#GH-login button#login').removeAttribute('disabled');
    }
  }, [username, userData]);

  useEffect(() => {
    if (window.localStorage.getItem('userData') === null || window.localStorage.getItem('userData') === '') {
      console.log('no user');
    } else {
      console.log('with user');
      setUserData(JSON.parse(window.localStorage.getItem('userData')));
    }
  }, []);

  const handleUsername = (e) => {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        setUsername(e.target.value);
        document.querySelector('input#usernameLogin').setAttribute('disabled', 'true');
        document.querySelector('label#forUsernameLogin').classList.add('text-gray-500');
      } else {
        setUsername(document.querySelector('input#usernameLogin').value);
        document.querySelector('input#usernameLogin').removeAttribute('disabled');
        document.querySelector('label#forUsernameLogin').classList.remove('text-gray-500');
      }
    } else {
      setUsername(e.target.value);
    }
  };

  const login = async (e) => {
    e && e.preventDefault();

    const response = await fetch(baseUrl, {
      method: 'GET',
      headers: {
        Authorization: process.env.REACT_APP_GH_TOKEN,
      },
    });
    const jsonData = await response.json();
    if (jsonData && jsonData.id) {
      setUserData(jsonData);
      window.localStorage.setItem('userData', JSON.stringify(jsonData));
      document.querySelector('form#GH-login') &&
        document.querySelector('form#GH-login small#userError').classList.add('hidden');
    } else {
      setUserData({});
      document.querySelector('form#GH-login small#userError').classList.remove('hidden');
    }
  };

  const logout = () => {
    setUserData({});
    window.localStorage.removeItem('userData');
    setUsername('');
  };

  return (
    <>
      <Head>
        <title>GetHub ― {userData.name ? `${userData.name}` : userData.login ? `${userData.login}` : 'Login'}</title>
        <link rel="shortcut icon" href="./gethub.svg" />
      </Head>

      <div className="h-screen bg-gray-50 mode dark:bg-nightView overflow-hidden">
        <Header logo={Logo} user={userData} logout={logout} />
        {!userData.id && <Login login={login} setUsername={handleUsername} />}
      </div>
    </>
  );
}
