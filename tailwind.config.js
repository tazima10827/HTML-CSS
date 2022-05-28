module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-150': '#EBEEF1',
      },
      fontFamily: {
        'display': ['Oswald'],
        'hiragino': ['ヒラギノ角ゴシック'],
      }
    },
  },
  variants: {
    extend: {},
  },
}