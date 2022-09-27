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
  const obj = {};

  const result = sourceString
    .split(';')
    .map(element => element.trim().split(':').map(el => el.trim()));

  for (const word of result) {
    if (word[0] !== '') {
      obj[word[0]] = word[1];
    }
  }

  return obj;
}

module.exports = convertToObject;
