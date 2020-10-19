module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
  },
  rules: {
    'no-proto': 0,
    'space-before-function-paren': ['error', 'always'],
  },
  plugins: ['jest'],
};
