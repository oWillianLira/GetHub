import { useState, useEffect } from 'react';
import Image from 'next/image';

import { DotsVerticalIcon, MoonIcon, SearchIcon, SunIcon } from '@heroicons/react/solid';
import user_pic from '../public/user_avatar.svg';
import MenuUser from './MenuUser';

export default function Header({ logo, user, menu, openMenu, logout }) {
  const [darkMode, setDarkMode] = useState();

  const changeMode = (mode) => {
    mode
      ? document.querySelector('body').classList.add('dark', 'bg-nightView')
      : document.querySelector('body').classList.remove('dark', 'bg-nightView');
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
    <header className="p-2 md:py-3 bg-gray-50 border-b-2 border-gray-100 border-solid mode dark:bg-almostDark dark:border-almostDark">
      <div className="relative 2xl:container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <Image width={30} height={30} src={logo} layout="fixed" />
          <h1 className="hidden sm:flex font-semibold text-xl text-dayText dark:text-gray-200">GetHub</h1>
        </a>
        <fieldset className="hidden sm:flex items-center border-b-2 border-gray-100 border-solid mode dark:border-almostDark">
          <SearchIcon className="h-7 w-5 text-gray-400 dark:text-nightText" />
          <input
            disabled
            type="text"
            placeholder="Search GitHub repository"
            className="bg-transparent text-sm dark:border-almostDark px-2 h-7 outline-none placeholder-gray-400 text-gray-600 dark:text-nightText"
          />
        </fieldset>
        <div className="flex items-center space-x-2">
          <button
            title="Change mode"
            onClick={toggleMode}
            className="rounded-md w-6 h-6 flex items-center justify-center bg-dayText dark:bg-nightText hover:scale-105 duration-200"
          >
            <MoonIcon className="text-gray-200 h-4 w-4 dark:hidden" />
            <SunIcon className="text-dayText h-4 w-4 hidden dark:flex" />
          </button>
          <button className="flex items-center outline-none" title="Options" onClick={() => openMenu(!menu)}>
            {user.avatar_url ? (
              <img
                width={30}
                height={30}
                src={`${user.avatar_url}&s=40`}
                alt={`${user.name}'s avatar`}
                className="rounded-full"
              />
            ) : (
              <Image width={30} height={30} layout="fixed" src={user_pic} className="rounded-full" />
            )}
            <DotsVerticalIcon className="h-full w-6 text-dayText dark:text-nightText" />
          </button>
        </div>
        {menu && user.id && <MenuUser user={user} logout={logout} />}
      </div>
    </header>
  );
}
