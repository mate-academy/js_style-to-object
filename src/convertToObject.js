'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const words = sourceString
    .split(';')
    .map(word => word.trim())
    .filter(values => values !== '');

  for (const word of words) {
    const string = word
      .split(':')
      .map(values => values.trim())
      .filter(values => values);

    result[string[0]] = string[1];
  }

  return result;
}

module.exports = convertToObject;
