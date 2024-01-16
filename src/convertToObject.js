'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strings = sourceString.split(';');
  const result = {};

  for (const string of strings) {
    const [property, value] = string.split(':').map(item => item.trim());

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}
module.exports = convertToObject;
