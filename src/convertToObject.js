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
  const result = {};
  const stylesPairs = sourceString.split(';').map(pair => pair.split(':'));

  stylesPairs.forEach(pair => {
    if (pair.length === 2) {
      const [key, value] = pair;

      result[key.trim()] = value.trim();
    }
  });

  return result;
}
module.exports = convertToObject;
