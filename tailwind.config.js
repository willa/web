const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [],
  purge: ['./**/*.tsx', './styles/*.scss'],
  theme: {
    colors,
    extend: {},
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Poppins', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  }
}
