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
  return sourceString
    .split(';')
    .map(string => string.split(':').map(subString => subString.trim()))
    .filter(trimmedString => trimmedString[0] !== '')
    .reduce((css, property) => {
      css[property[0]] = property[1];

      return css;
    }, {});
}

module.exports = convertToObject;
