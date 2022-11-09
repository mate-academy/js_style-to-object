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
  // write your code here
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .reduce((obj, prop) => {
      if (prop[0] !== undefined && prop[1] !== undefined) {
        obj[prop[0].trim()] = prop[1].trim();
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
