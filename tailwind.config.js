/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: {
        400: "#fff"
      },
      black: {
        400: "#00000033"
      },
      fullBlack: {
        400: "#000"
      }
    },
    screens: {
      'sm': '375px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    }
  },
  plugins: [],
}