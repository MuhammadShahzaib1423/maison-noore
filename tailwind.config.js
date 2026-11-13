/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          DEFAULT: '#17130f',
          soft: '#221c16',
          lighter: '#2e2620',
        },
        ivory: {
          DEFAULT: '#f6f1e8',
          deep: '#efe7d8',
          dark: '#e3d9c4',
        },
        gold: {
          DEFAULT: '#c2a059',
          light: '#d9bc7a',
          dark: '#9a7d42',
        },
        rosewood: {
          DEFAULT: '#a9705c',
          light: '#c69a87',
          soft: '#e8d5cb',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
    },
  },
  plugins: [],
};
