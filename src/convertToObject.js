'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedStyles = {};

  sourceString
    .split(';')
    .map(keyValue => keyValue.trim().split(':'))
    .forEach(keyValue => {
      const [key, value] = keyValue;

      if (key && value) {
        convertedStyles[key.trim()] = value.trim();
      }
    });

  return convertedStyles;
}

module.exports = convertToObject;
