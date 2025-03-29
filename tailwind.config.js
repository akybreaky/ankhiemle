/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class', // Ensures dark mode is applied when the 'dark' class is added
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
