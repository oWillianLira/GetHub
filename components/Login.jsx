import { useState, useEffect } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');

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

  const login = (e) => {
    e.preventDefault();
    console.log(username);
  };

  useEffect(() => {
    username === ''
      ? document.querySelector('form#GH-login button#login').setAttribute('disabled', 'true')
      : document.querySelector('form#GH-login button#login').removeAttribute('disabled');
  });

  return (
    <div className="absolute inset-0 glass flex items-center justify-center">
      <form
        id="GH-login"
        onSubmit={login}
        className="bg-dayText px-3 py-5 text-gray-100 w-11/12 sm:w-7/12 md:w-6/12 xl:w-5/12 max-w-full rounded-lg shadow-2xl"
      >
        <h3 className="font-medium text-lg mb-3">Enter your GitHub username</h3>
        <div className="flex items-center space-x-2">
          <label htmlFor="usernameLogin" id="forUsernameLogin" className="cursor-pointer text-lg text-nightAction">
            ➙
          </label>
          <input
            type="text"
            id="usernameLogin"
            className="bg-transparent px-1 outline-none text-nightText placeholder-gray-500 disabled:line-through disabled:opacity-50"
            placeholder="Your GitHub username..."
            onChange={handleUsername}
          />
        </div>
        <h3 className="font-medium text-lg mt-6 mb-3">Or, use creator data</h3>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="creatorLogin"
            className="w-4 h-4 cursor-pointer appearance-none bg-gray-300 rounded-tr-lg rounded-br-lg peer checked:bg-nightAction duration-150"
            value="oWillianLira"
            onChange={handleUsername}
          />
          <label
            htmlFor="creatorLogin"
            className="cursor-pointer select-none text-gray-500 peer-checked:text-gray-200 duration-150"
          >
            Enter as 'oWillianLira'
          </label>
        </div>
        <button
          type="submit"
          id="login"
          disabled
          className="mt-10 mx-auto block bg-nightAction py-1 px-3 w-56 rounded-lg font-medium text-dayText transition duration-200 disabled:bg-gray-600 disabled:cursor-default"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
