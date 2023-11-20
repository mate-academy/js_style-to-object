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
  return sourceString.split(';')
    .map(value => value.trim())
    .filter(value => value !== '')
    .reduce((prev, curr) => {
      return {
        ...prev,
        [curr.split(':')[0].trim()]: curr.split(':')[1].trim(),
      };
    }, {});
}

module.exports = convertToObject;
