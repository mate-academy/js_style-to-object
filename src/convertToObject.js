'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newWords = sourceString.split(';');
  const result = {};

  for (let i = 0; i < newWords.length; i++) {
    const target = newWords[i].trim();
    const current = target.split(':');

    if (current.length === 2) {
      const property = current[0].trim();
      const value = current[1].trim();

      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
