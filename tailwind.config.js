// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1440px"
      },
      container: {
        center: true,
        padding: "12px"
      },
      backgroundImage: {
        ice_bg: "url('./src/assets/Images/png/ice_bg.png')"
      }
    },
  },
  plugins: [],
}


// import gi from './src/assets/Images/png/ice_bg.png'