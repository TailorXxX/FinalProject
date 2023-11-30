/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#242b4a',
            foreground: '#e3fff4',
            primary: {
              50: '#143738',
              100: '#1f5759',
              200: '#246567',
              300: '#9823C2',
              400: '#c031e2',
              500: '#2a7476',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#2a7476',
              foreground: '#ffffff',
              background: '#242b4a',
              focus: '#246567',
            },
            secondary: {
              50: '#ffffff00',
              100: '#2a747690',
              200: '#FDD5F9',
              300: '#9823C2',
              400: '#c031e2',
              500: '#fff',
              600: '#fff',
              700: '#feecfe',
              800: '#feecfe',
              900: '#FEECFE',
              DEFAULT: '#fff',
              foreground: '#ffffff',
            },
            focus: '#fff',
          },
        },
        light: {
          colors: {
            background: '#fff',
          },
        },
      },
    }),
  ],
};
