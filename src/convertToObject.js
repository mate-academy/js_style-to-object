'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map(string => string.trim())
    .filter(element => element.length > 1)
    .map(item => item.split(':')
      .map(string => string.trim()));

  return Object.fromEntries(stylesArray);
}

module.exports = convertToObject;
