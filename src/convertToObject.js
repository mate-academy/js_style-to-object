'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propArr = sourceString.split(';');
  const result = {};

  for (let i = 0; i < propArr.length; i++) {
    const el = propArr[i].split(': ');

    if (el[1]) {
      const key = el[0].trim();
      const value = el[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
