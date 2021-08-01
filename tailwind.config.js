const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
      body: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              fontFamily: ['Nunito'],
              fontWeight: 700,
              color: theme('colors.gray.800', defaultTheme.colors.gray[800]),
            },
            h3: {
              fontFamily: ['Nunito'],
              fontWeight: 700,
              color: theme('colors.gray.700', defaultTheme.colors.gray[700]),
            },
            h4: {
              fontFamily: ['Nunito'],
              fontWeight: 700,
              color: theme('colors.gray.700', defaultTheme.colors.gray[700]),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300', defaultTheme.colors.gray[300]),
            h2: {
              color: theme('colors.gray.200', defaultTheme.colors.gray[200]),
            },
            h3: {
              color: theme('colors.gray.300', defaultTheme.colors.gray[300]),
            },
            h4: {
              color: theme('colors.gray.300', defaultTheme.colors.gray[300]),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
