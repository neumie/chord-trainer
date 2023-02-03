/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0px 0px 3px rgb(0, 0, 0)",
      },
    },
  },
  plugins: [],
};
