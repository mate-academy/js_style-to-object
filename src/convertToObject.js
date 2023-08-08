'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(el => el.trim().split(':'))
    .filter(el => el[0].length !== 0)
    .map(el => [el[0].trim(), el[1].trim()])
    .reduce((prev, item) => ({
      ...prev, [item[0]]: item[1],
    }), {});
}

module.exports = convertToObject;
