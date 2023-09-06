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
  const newWords = sourceString.split('\n');
  const result = {};

  for (let i = 0; i < newWords.length; i++) {
    const target = newWords[i].trim();
    const current = target.split(':');

    if (current.length === 2) {
      const property = current[0].trim();
      let value = current[1].trim();

      value = value.slice(0, -1);
      value = value.trim();

      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
