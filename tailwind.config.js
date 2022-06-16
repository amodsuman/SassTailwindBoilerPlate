const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./**/*.html', './assets/*.js'],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      }
    },
  },
  plugins: [],
}
