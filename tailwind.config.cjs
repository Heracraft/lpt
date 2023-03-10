const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      
        // primary: {
        //   DEFAULT: "#2d3047",
        //   50: "#f5f5fa",
        //   100: "#ebecf3",
        //   200: "#d2d4e5",
        //   300: "#abb1ce",
        //   400: "#7d86b3",
        //   500: "#5d679a",
        //   600: "#495180",
        //   700: "#3c4168",
        //   800: "#343858",
        //   900: "#2d3047",
        // },
        anzac:"#f5d547",
        'cerise-red': {
          '50': '#fdf2f7',
          '100': '#fce7f1',
          '200': '#fbcfe3',
          '300': '#f8a9cb',
          '400': '#f373a8',
          '500': '#eb4987',
          '600': '#db3069',
          '700': '#bd194b',
          '800': '#9c183e',
          '900': '#821937',
      },
      
        primary: {
          DEFAULT:"#313130",
          50 : '#f7f7f6',
          100: '#e4e4e3',
          200: '#c8c8c7',
          300: '#a5a5a3',
          400: '#82817f',
          500: '#676765',
          600: '#515150',
          700: '#434342',
          800: '#3c3c3b',
          900: '#313130',
        },
      

        //   primary: {
        //     DEFAULT:"#5526ad",
        //     50: '#eeedff',
        //     100: '#deddff',
        //     200: '#c7c2ff',
        //     300: '#a99eff',
        //     400: '#9177ff',
        //     500: '#8357fd',
        //     600: '#7939f2',
        //     700: '#6a2cd6',
        //     800: '#5526ad',
        //     900: '#432581',
        // },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("svg", "& svg");
      addVariant("li", "& li");
    },
  ],
};
