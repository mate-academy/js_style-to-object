'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringToObject = {};

  sourceString
    .split(';')
    .forEach(rule => {
      const toArray = rule
        .split(':')
        .map(word => word.trim());
      const [key, value] = toArray;

      if (key && value) {
        stringToObject[key] = value;
      }
    });

  return stringToObject;
}

module.exports = convertToObject;
