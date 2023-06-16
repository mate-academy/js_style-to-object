'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const strings = sourceString.split('\n')
    .filter(string => string.includes(':'))
    .map(string => string.split(':'));

  const object = {};

  strings.forEach(string => {
    object[string[0].trim()] = string[1].slice(0, -1).trim();
  });

  return object;
}

module.exports = convertToObject;
