module.exports = {
  extends: '@mate-academy/eslint-config',
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
