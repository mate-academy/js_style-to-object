'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.trim().split(';')
    .map(item => item.trim().split(':'))
    .filter(item => item.length > 1)
    .reduce(function(prev, item) {
      prev[item[0].trim()] = item[1].trim();

      return prev;
    }, {});
}

module.exports = convertToObject;
