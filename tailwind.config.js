/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: "#10e956",
        matrix: {
          light: "#10e956",
          DEFAULT: "#00FF41",
          dark: "#003B00",
          bg: "#0D0208",
        },
      },
      animation: {
        "nav-hover": "nav-hover 0.3s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "staggered-fade": "staggered-fade 0.5s ease-out forwards",
        "matrix-glow": "matrix-glow 2s infinite alternate",
      },
      keyframes: {
        "nav-hover": {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "matrix-glow": {
          "0%": { boxShadow: "0 0 5px #10e956, 0 0 10px #10e956" },
          "100%": { boxShadow: "0 0 20px #10e956, 0 0 30px #10e956" },
        },
      },
      screens: {
        xs: "370px",
        xxs: "300px",
      },
    },
  },
  plugins: [],
};
