'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const correctStyles = {};

  sourceString
    .split(';')
    .map(element => element.trim())
    .filter(element => element !== '')
    .map(element => {
      const [key, value] = element.split(':');

      correctStyles[key.trim()] = value.trim();
    });

  return correctStyles;
}

module.exports = convertToObject;
