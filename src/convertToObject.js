'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 *  [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const stringToArray = sourceString.split(';');

  for (let i = 0; i < stringToArray.length; i++) {
    const arrayTrim = stringToArray[i].trim();
    const index = arrayTrim.indexOf(':');

    if (index !== -1) {
      const key = arrayTrim.slice(0, index).trim();
      const value = arrayTrim.slice(index + 1).trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
