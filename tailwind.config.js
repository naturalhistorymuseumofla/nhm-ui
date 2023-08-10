const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  content: [],
  theme: {
    extend: {
      colors: {
        nhm: '#52840E',
        lbtp: '#D14900'
      },
      scale: {
        '102': '1.02',
      },
      textShadow: {
        sm: '0 0px 3px #000010',
        DEFAULT: '0 0px 4px #000020',
        lg: '0 0px 5px #000030',
      },
      fontFamily: {
        sans: ['Kievit', 'KievitOT'],
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  corePlugins: {
    preflight: true,
  },
}

