/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#10e956",
      },
      screens: {
        xs: "370px",
        xxs: "300px",
      },
    },
  },
  plugins: [],
};
