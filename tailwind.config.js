const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    './example/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nhm: '#52840E',
        lbtp: '#D14900',
        // mapped from legacy Sass variables for internal consistency
        gray: {
          100: '#efefef', // $c-grey-x-light
          200: '#e1e1e1', // $c-grey-light
          400: '#868686', // $c-grey-med
          500: '#6b6b6b', // $c-grey-med-text
          600: '#696969', // $c-grey-med-label / $c-grey-696969
          900: '#333333', // $c-grey-dark
        },
      },
      scale: {
        '102': '1.02',
      },
      textShadow: {
        sm: '0 0px 10px rgba(0,0,0,0.10)',
        DEFAULT: '0 0px 10px rgba(0,0,0,0.3)',
        lg: '0 0px 10px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        sans: ['Kievit', 'KievitOT'],
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
  corePlugins: {
    preflight: true,
  },
};
