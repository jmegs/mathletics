/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'hiContrast': '#fff',
      'loContrast': '#464646',
      'accent': '#FF4F00',
      'surface': {
        0: '#0C0C0C',
        1: '#141414',
        2: '#1c1c1c'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
