'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const rules = sourceString.split(';')
    .map(rule => rule.trim())
    .filter(Boolean);

  const result = {};

  for (const rule of rules) {
    const parts = rule.split(':');

    result[parts[0].trim()] = parts[1].trim();
  }

  return result;
}

module.exports = convertToObject;
