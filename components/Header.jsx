import Image from 'next/image';

import { DotsVerticalIcon, MoonIcon, SearchIcon, SunIcon } from '@heroicons/react/solid';
import user_pic from '../public/user_avatar.svg';

export default function Header({ logo }) {
  const changeMode = () => {
    document.querySelector('body').classList.toggle('dark');
  };

  return (
    <header className="p-2 md:py-4 bg-gray-50 border-b-2 border-solid dark:bg-gray-800 dark:border-gray-600">
      <div className="md:container mx-auto flex items-center justify-between">
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <Image width={40} height={40} src={logo} layout="fixed" />
          <h1 className="hidden md:flex font-semibold text-xl text-gray-800 dark:text-gray-200">GetHub</h1>
        </a>
        <fieldset className="flex items-center">
          <SearchIcon className="h-full w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search GitHub repository"
            className="bg-transparent border-b-2 border-solid dark:border-gray-600 px-2 h-10 outline-none placeholder-gray-400 text-gray-600 dark:text-gray-300"
          />
        </fieldset>
        <div className="flex items-center space-x-5">
          <button
            title="Mode"
            onClick={changeMode}
            className="rounded-lg w-7 h-7 flex items-center justify-center bg-gray-800 dark:bg-gray-200"
          >
            <MoonIcon className="text-gray-200 h-5 w-5 dark:hidden" />
            <SunIcon className="text-gray-800 h-5 w-5 hidden dark:flex" />
          </button>
          <button className="flex items-center">
            <Image width={40} height={40} layout="fixed" src={user_pic} className="rounded-full" />
            <DotsVerticalIcon className="h-full w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
    </header>
  );
}
