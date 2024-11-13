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
        background: "#000",
        secondaryBackground: "#0A0A0A",
        text: "#EDEDED",
        gray: "#1A1A1A",
      },
      fontFamily: {
        GeistBlack: ["GeistBlack", "sans-serif"],
        GeistLight: ["GeistLight", "sans-serif"],
        GeistRegular: ["GeistRegular", "sans-serif"],
        GeistMedium: ["GeistMedium", "sans-serif"],
        GeistBold: ["GeistBold", "sans-serif"],
        GeistXBold: ["GeistExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
