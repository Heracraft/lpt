const colors=require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:"class",
  theme: {
    extend:{
      colors:{
        primary: {
          DEFAULT:"#5526ad",
          50: '#eeedff',
          100: '#deddff',
          200: '#c7c2ff',
          300: '#a99eff',
          400: '#9177ff',
          500: '#8357fd',
          600: '#7939f2',
          700: '#6a2cd6',
          800: '#5526ad',
          900: '#432581',
      },
      
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('svg', '& svg');
      addVariant('li', '& li');
    }
  ],
}
