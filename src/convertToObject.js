'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const formatStyles = sourceString
    .split(';')
    .map(item => item.trim().split(':')
      .map(item2 => item2.trim()).join(':'))
    .filter(element => element !== '');

  const cssStyles = formatStyles.reduce((keys, item) => (
    {
      ...keys,
      [item.split(':')[0]]: item.split(':')[1],
    }
  ), {});

  return cssStyles;
}

module.exports = convertToObject;
