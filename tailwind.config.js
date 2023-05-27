/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm:'300px',
      sm: '550px',
      smd: '650px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ["ArbutusSlab","Graphik", "sans-serif"],
        serif: ["Karla","Montserrat", "serif"],
      },
    },
  },
  plugins: [],
};
