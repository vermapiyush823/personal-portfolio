// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#FFFFFF",
          text: "#FFFFFF",
        },
        dark: {
          primary: "#000000",
          text: "#000000",
        },
        whiteGray: "#D1D5DB",
        gray: "#454545",
        textGray: "#878787",
      },
    },
  },
  plugins: [],
};
