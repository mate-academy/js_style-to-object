'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
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

  const splitedArray = sourceString.split(';');

  const objectArray = splitedArray
    .filter(item => item.trim().length > 0)
    .map(item => item.split(':').map(value => value.trim()));

  objectArray.forEach(prop => {
    result[prop[0]] = prop[1];
  });

  return result;
}

module.exports = convertToObject;
