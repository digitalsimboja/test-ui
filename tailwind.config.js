/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'gt-walsheim': ['GT Walsheim'],
    },
    extend: {
      boxShadow: {
        'custom': '0px 3px 0px #DFE1E4',
      },
    },
  },
  plugins: [],
}
