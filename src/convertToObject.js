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
  const result = {};

  const splitArr = sourceString.split(';');

  splitArr.sort((a, b) => a.localeCompare(b));

  for (const key of splitArr) {
    const i = key.split(':');

    if (i[1] !== undefined) {
      result[i[0].trim()] = (i[1].trim());
    }
  }

  return result;
}

module.exports = convertToObject;
