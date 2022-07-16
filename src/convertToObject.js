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

  sourceString
    .split(';')
    .map(word => word.trim())
    .filter(values => values !== '')
    .forEach(key => {
      if (key.length > 1) {
        const word = key
          .split(':')
          .map((values) => values.trim())
          .filter(values => values);

        result[word[0]] = word[1];
      }
    });

  return result;
}

module.exports = convertToObject;
