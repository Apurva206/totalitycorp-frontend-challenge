/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
      },
      colors: {
        grey: 'rgb(190, 182, 183)',
        SlateGrey: '#2F4F4F',
        black: 'rgb(0 0 0)',
        Green: '#75CE9F',
        white: 'rgb(255, 255, 255)',
        Dgrey: 'rgb(112,128,144)',
        ForestGreen:'#228B22',
        SkyBlue:'hsl(0,0%,90%)'
      },
    },
  },
  plugins: [],
}

