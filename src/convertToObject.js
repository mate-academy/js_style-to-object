'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const newString = sourceString.split(';').map((elem) => elem.split(': '));

  for (const i in newString) {
    if (newString[i].length > 1) {
      const key = newString[i][0].trim();
      const value = newString[i][1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
