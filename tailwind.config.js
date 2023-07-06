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
      fontFamily: {
        sans: ['Kievit', 'KievitOT'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

