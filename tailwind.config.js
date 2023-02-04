/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': {
          100: '#D1D6DE',
          200: '#A9B2C0',
          300: '#919DAD',
          400: '#5E728F',
          500: '#3F5474',
          600: '#263C5B',
          700: '#102849',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        md: '768px',
        lg: '900px',
        xl: '1040px',
      },
      gridTemplateColumns: {
        'forecast-mobile': '2fr min-content 1fr 2fr',
        'forecast-4': '4fr 11fr 26fr 7fr',
        'forecast-5': '4fr 11fr 26fr 7fr 8fr',
        'forecast-7': '5fr 11fr 26fr 7fr 8fr 7fr 8fr',
      },
    },
  },
  plugins: [],
};
