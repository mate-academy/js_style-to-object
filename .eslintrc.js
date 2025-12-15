module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
  },
  rules: {
    'no-proto': 0,
    "comma-dangle": ["error", "always-multiline"],
    "function-paren-newline": "off",
  },
  plugins: ['jest'],

};
