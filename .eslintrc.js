module.exports = {
  extends: '@mate-academy/eslint-config',
  env: {
    jest: true,
  },
  rules: {
    'no-proto': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  plugins: ['jest'],
};
