import Image from 'next/image';

import { DotsVerticalIcon, MoonIcon, SearchIcon, SunIcon } from '@heroicons/react/solid';
import user_pic from '../public/user_avatar.svg';

export default function Header({ logo, mode }) {
  return (
    <header className="p-2 md:py-3 bg-gray-50 border-b-2 border-gray-100 border-solid mode dark:bg-nightAction dark:border-nightAction">
      <div className="2xl:container mx-auto flex items-center justify-between">
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <Image width={30} height={30} src={logo} layout="fixed" />
          <h1 className="hidden sm:flex font-semibold text-xl text-dayContent dark:text-gray-200">GetHub</h1>
        </a>
        <fieldset className="hidden sm:flex items-center border-b-2 border-gray-100 border-solid mode dark:border-nightAction">
          <SearchIcon className="h-7 w-5 text-gray-400 dark:text-nightContent" />
          <input
            type="text"
            placeholder="Search GitHub repository"
            className="bg-transparent text-sm dark:border-nightAction px-2 h-7 outline-none placeholder-gray-400 text-gray-600 dark:text-nightContent"
          />
        </fieldset>
        <div className="flex items-center space-x-2">
          <button
            title="Mode"
            onClick={mode}
            className="rounded-md w-6 h-6 flex items-center justify-center bg-dayContent dark:bg-nightContent hover:scale-105 duration-200"
          >
            <MoonIcon className="text-gray-200 h-4 w-4 dark:hidden" />
            <SunIcon className="text-dayContent h-4 w-4 hidden dark:flex" />
          </button>
          <button className="flex items-center">
            <Image width={30} height={30} layout="fixed" src={user_pic} className="rounded-full" />
            <DotsVerticalIcon className="h-full w-6 text-dayContent dark:text-nightContent" />
          </button>
        </div>
      </div>
    </header>
  );
}
