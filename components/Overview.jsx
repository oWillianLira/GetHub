import { ExternalLinkIcon, LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

export default function Overview({ user }) {
  return (
    <main className="w-11/12 max-w-3xl mx-auto">
      <header className="flex items-center justify-between py-3 text-dayText">
        <a
          href={user.html_url}
          title="Open on GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-base flex items-center"
        >
          <ExternalLinkIcon className="h-4 mr-1 text-purple-600" />
          {user.name ? user.name : user.login}
        </a>
        {user.company != null ? (
          <p className="font-normal text-sm flex items-center">
            <OfficeBuildingIcon className="h-4 mr-1 text-green-600" />
            {user.company}
          </p>
        ) : user.location != null ? (
          <p className="font-normal text-sm flex items-center">
            <LocationMarkerIcon className="h-4 mr-1 text-green-600" />
            {user.location}
          </p>
        ) : null}
      </header>
    </main>
  );
}
