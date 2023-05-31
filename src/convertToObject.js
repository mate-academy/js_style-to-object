'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example in
 * [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map(rule => rule.trim())
    .filter(rule => rule)
    .forEach(rule => {
      const [key, value] = rule.split(':')
        .map(values => values.trim());

      result[key] = value;
    });

  return result;
}

module.exports = convertToObject;
