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
      backgroundColor: {
        "opensource":  "rgba(83, 59, 229, 0.05)",
      },
      colors: {
        "todo-color": "#111118",
        "in-progress-color": "#191925",
        "cloud-platform-color": "#6C6F75",
        "cloud-text": "#58B2CB",
        "check-mark-color": "78C552"
      },
      boxShadow: {
        'custom': '0px 3px 0px #DFE1E4',
      },
    },
  },
  plugins: [],
}
