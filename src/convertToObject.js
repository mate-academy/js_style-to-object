'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
   (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const obj = {};

  sourceString.split(';')
    .map(part => part.trim())
    .filter(part => part.length > 0)
    .map(part => part.split(':')
      .map(word => word.trim()))
    .map(part => (obj[part[0]] = part[1]));

  return obj;
}

module.exports = convertToObject;
