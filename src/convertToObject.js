'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an example
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .filter(element => element.length > 1)
    .reduce((prev, [property, value]) => {
      prev[property.trim()] = value.trim();

      return prev;
    }, {});
}

module.exports = convertToObject;
