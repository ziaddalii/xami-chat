/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: { light: "#E5E5E5", dark: "#D9D9D9" },
      },
    },
  },
  plugins: [],
};
