/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm:'300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Montserrat","Karla", "serif"],
      },
    },
  },
  plugins: [],
};
