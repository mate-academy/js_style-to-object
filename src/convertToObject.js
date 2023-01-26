'use strict';

/**
 * Implement convertToObject function:
 *
 eslint-disable-next-line max-len
 * Function takes a string with styles
 (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const trimmed = [];
  const result = [];
  const splitted = sourceString.split(';').join(':').split(':');

  for (const char of splitted) {
    trimmed.push(char.trim());
  }

  const filtered = trimmed.filter(n => n);

  for (let i = 0; i < filtered.length; i += 2) {
    result.push([filtered[i], filtered[i + 1]]);
  }

  return Object.fromEntries(result);
}

module.exports = convertToObject;
