'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(el => el.trim())
    .filter(el => el !== '')
    .map(el => el.split(':'))
    .reduce((obj, [key, value]) => {
      obj[key.trim()] = value.trim();

      return obj;
    }, {});
}

module.exports = convertToObject;
