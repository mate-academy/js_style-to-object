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
  const newArrow = sourceString.split(';');
  const objectForReturn = {};

  newArrow.map(arr => arr.split(':'))
    .forEach(value => {
      if (value.length > 1) {
        objectForReturn[value[0].trim()] = value[1].trim();
      }
    });

  return objectForReturn;
}

module.exports = convertToObject;
