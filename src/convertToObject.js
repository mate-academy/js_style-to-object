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
  const result = {};

  const temporality = sourceString.split(`;`).map((a) => a.split(':'));

  for (const ch of temporality) {
    if (ch[1] !== undefined) {
      result[ch[0].trim()] = ch[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
