const colors = require('tailwindcss/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Global/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '576px',
      tablet: '960px',
      desktop: '1440px',
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
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
