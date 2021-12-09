import { ExternalLinkIcon } from '@heroicons/react/solid';

export default function MenuUser({ user, logout }) {
  return (
    <nav className="absolute right-0 top-11 bg-gray-50 rounded-b-md border-2 border-t-0 border-gray-100 border-solid mode dark:bg-almostDark dark:border-almostDark">
      <ul className="p-1">
        <li className="">
          <a
            href={user.html_url}
            title="Open on GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dayText flex w-full text-left items-center py-2 pl-4 pr-7 mode dark:text-nightText"
          >
            {user.name ? user.name : user.login} <ExternalLinkIcon className="h-4 ml-2" />
          </a>
        </li>
        <li className="border-t-2 border-gray-100 mode dark:border-nightAction">
          <button
            className="appearance-none w-full text-left text-dayText py-2 pl-4 pr-7 mode dark:text-nightText"
            title="Logout"
            onClick={logout}
          >
            Sign out
          </button>
        </li>
      </ul>
    </nav>
  );
}
