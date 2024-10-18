/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        base: "#101116",
      },
    },
    screens: {
      420: { max: "420px" },
      480: { max: "480px" },
      640: { max: "640px" },
      768: { max: "768px" },
      960: { max: "960px" },
      1024: { max: "1024px" },
    },
  },
  plugins: [],
};
