module.exports = {
  extends: 'standart',
  env: {
    node: true,
    jest: true
  },
  rules: {
    semi: ['error', 'always', {'omitLastInOneLineBlock': true}],
    strict: 'error'
  },
  parserOptions: {
    sourceType: 'script'
  },
  plugins: ['jest']
};
