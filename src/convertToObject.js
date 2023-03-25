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
  const separatedString = sourceString.split(';');
  const obj = {};

  for (const string of separatedString) {
    const index = string.indexOf(':');
    const key = string.slice(0, index).trim();
    const value = string.slice(index + 2).trim();

    if (key.length <= 0) {
      continue;
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
