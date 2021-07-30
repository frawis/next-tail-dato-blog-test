const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      green: colors.emerald,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      display: ['Nunito', ...defaultTheme.fontFamily.sans],
      body: ['Lora', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.600', defaultTheme.colors.trueGray[600]),
            h2: {
              fontFamily: ['"Work Sans"'],
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
