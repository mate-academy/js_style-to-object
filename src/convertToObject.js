'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
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

  const splitArr = sourceString.split(';');

  const filteredArr = splitArr
    .filter(prop => prop.length)
    .map(prop => prop.split(':'));

  for (const prop of filteredArr) {
    if (prop.length > 1) {
      result[prop[0].trim()] = prop[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
