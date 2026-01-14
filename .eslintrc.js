module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true
  },
  rules: {
    'no-proto': 0,
    'function-paren-newline': 0
  },
  plugins: ['jest']
};
