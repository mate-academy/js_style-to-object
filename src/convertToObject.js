'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes
 * a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const firstArr = sourceString.split(/[;:]/);
  const secondArr = firstArr.map(x => x.trim());
  const result = {};

  for (let i = 0; i < secondArr.length; i += 2) {
    if (secondArr[i + 1] === undefined || secondArr[i + 1] === '') {
      continue;
    }

    result[secondArr[i]] = secondArr[i + 1];
  }

  return result;
}

module.exports = convertToObject;
