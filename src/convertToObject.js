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
  return sourceString.split(';')
    .map(property => property.split(':'))
    .map(array => array.map(property => property.trim()))
    .filter(array => array.length > 1)
    .map(array => {
      const obj = {};

      obj[array[0]] = array[1];

      return obj;
    })
    .reduce((prev, currentValue) => ({
      ...prev, ...currentValue,
    }), {});
}

module.exports = convertToObject;
