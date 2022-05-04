'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';').map(x => x.split(':'));
  const result = {};

  arr.forEach(x => {
    if (x.length > 1) {
      result[x[0].trim()] = x[1].trim();
    }
  });

  return result;
}

module.exports = convertToObject;
