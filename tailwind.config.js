module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dayContent: '#24292f',
        nightView: '#22272e',
        nightAction: '#2d333b',
        nightContent: '#adbac7',
        nightGo: '#ec775c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
