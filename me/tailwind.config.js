import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-400': '#FF8C42',
        'zinc': {
          800: '#27272a'
        }
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            height: '8px',
            width: '8px',
          }
        },
        '.scrollbar-thumb-orange-400': {
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme('colors.orange.400'),
            borderRadius: '4px',
          },
        },
        '.scrollbar-track-zinc-800': {
          '&::-webkit-scrollbar-track': {
            backgroundColor: theme('colors.zinc.800'),
          },
        },
      })
    })
  ],
}