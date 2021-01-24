// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-preset-env': {
      nesting: {},
      autoprefixer: {},
      stage: 1,
      features: {
        'custom-properties': true,
      },
    },
  },
}
