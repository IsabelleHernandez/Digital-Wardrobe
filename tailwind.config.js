/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wardrobeBlue: '#3B82F6',
        wardrobeBeige: '#F5F5DC',
        wardrobeGray: '#9CA3AF',
      },
    },
  },
  plugins: [],
};
