
module.exports = {
  mode: 'jit',
  darkMode: 'class',

  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'secondary': '#f1c40f',
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
