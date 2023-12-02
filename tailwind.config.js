/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
        pap: ["Paprika"],
        nun: ["Nunito"],
        roboto: ["Roboto"],
        workSans: ["Work Sans"],
      },
      backgroundImage: {
        Banner: "url('./src/assets/Images/Banner.png')",
      },
      colors: {
        reviewShadow: " 0px 30px 60px 0px rgba(162, 169, 192, 0.10)",
      },
    },
  },
  plugins: [],
};
