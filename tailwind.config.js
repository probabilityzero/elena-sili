/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37', // Gold
        secondary: '#E6B8B8', // Pink
        tertiary: '#C0C0C0', // Silver
        beige: '#FAF7F2',
        dark: '#2C2C2C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};