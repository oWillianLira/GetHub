import Image from 'next/image';

import { DotsVerticalIcon, MoonIcon, SearchIcon, SunIcon } from '@heroicons/react/solid';
import user_pic from '../public/user_avatar.svg';

export default function Header({ logo, mode }) {
  return (
    <header className="p-2 md:py-3 bg-gray-50 border-b-2 border-gray-100 border-solid mode dark:bg-almostDark dark:border-almostDark">
      <div className="2xl:container mx-auto flex items-center justify-between">
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <Image width={30} height={30} src={logo} layout="fixed" />
          <h1 className="hidden sm:flex font-semibold text-xl text-dayText dark:text-gray-200">GetHub</h1>
        </a>
        <fieldset className="hidden sm:flex items-center border-b-2 border-gray-100 border-solid mode dark:border-almostDark">
          <SearchIcon className="h-7 w-5 text-gray-400 dark:text-nightText" />
          <input
            type="text"
            placeholder="Search GitHub repository"
            className="bg-transparent text-sm dark:border-almostDark px-2 h-7 outline-none placeholder-gray-400 text-gray-600 dark:text-nightText"
          />
        </fieldset>
        <div className="flex items-center space-x-2">
          <button
            title="Change mode"
            onClick={mode}
            className="rounded-md w-6 h-6 flex items-center justify-center bg-dayText dark:bg-nightText hover:scale-105 duration-200"
          >
            <MoonIcon className="text-gray-200 h-4 w-4 dark:hidden" />
            <SunIcon className="text-dayText h-4 w-4 hidden dark:flex" />
          </button>
          <button className="flex items-center">
            <Image width={30} height={30} layout="fixed" src={user_pic} className="rounded-full" />
            <DotsVerticalIcon className="h-full w-6 text-dayText dark:text-nightText" />
          </button>
        </div>
      </div>
    </header>
  );
}
