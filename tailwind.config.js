/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryRed: "hsl(0, 97%, 63%)",
        darkBlue: "hsl(223, 30%,9%)",
        semiDarkBlue: "hsl(223,36%,14%)",
        grayishBlue: "hsl(223,23%,46%)",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
