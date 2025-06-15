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
        whiteGray: "#EDEDED",
        gray: "#454545",
        textGray: "#878787",
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 1 },
        },
      },
    },
    boxShadow: {
      custom: "rgba(0,0,0, 0.34) 0px 3px 8px",
      customDark: "rgba(255,255,255, 0.24) 0px 3px 10px",
    },
  },
  plugins: [],
};
