'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  return sourceString
    .split(';')
    .filter(el => el.includes(':'))
    .map(el => el.split(':'))
    .reduce((prev, el) => {
      const key = el[0].trim();
      const value = el[1].trim();

      return {
        ...prev,
        [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
