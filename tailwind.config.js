module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dayText: '#24292f',
        nightView: '#22272e',
        almostDark: '#2d333b',
        nightText: '#adbac7',
        nightAction: '#ec775c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
