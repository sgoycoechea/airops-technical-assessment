/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "system-ui"],
      },
      colors: {
        primary: "#09090B",
      },
    },
  },
  plugins: [],
};
