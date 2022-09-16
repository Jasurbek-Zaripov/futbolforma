const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      green: {
        10: '#E9F6F4',
        20: '#D3ECE8',
        40: '#A8D9D2',
        60: '#7CC7BB',
        80: '#51B4A5',
        100: '#25A18E',
      },
      black: {
        10: '#E7E7E7',
        20: '#D0D0D0',
        40: '#A0A0A0',
        60: '#717171',
        80: '#414141',
        100: '#121212',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
