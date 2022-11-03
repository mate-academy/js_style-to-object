'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const modifiedStr = sourceString.split(';');
  const mod2 = modifiedStr.map(x => x.split(':'));

  for (const array of mod2) {
    if (array[1]) {
      result[array[0].trim()] = array[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
