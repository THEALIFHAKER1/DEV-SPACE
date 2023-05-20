const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {},
    fontSize: {},
    colors: {
      primary: colors.red,
      secondary: {
        light: '#ffffff',
        dark: '#000000',
      },
      background: {
        light: '#ffffff',
        dark: '#000000',
      },
      text: {
        light: '#000000',
        dark: '#ffffff',
      },
    },
    extend: {
      colors: {
        primary: {
          light: '#f00',
          dark: '#c00',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
// primary
// primary-light
// primary-dark
// secondary
// secondary-light
// secondary-dark
// background
// background-light
// background-dark
