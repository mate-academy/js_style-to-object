module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  parser: 'babel-eslint',
  rules: {
    'no-proto': 0
  },
  plugins: ['jest']
};
