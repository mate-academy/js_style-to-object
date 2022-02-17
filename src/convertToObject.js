'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const firstArr = sourceString.split(';')
    .map(el => el.split(':'))
    .filter(el => el.length > 1);

  const result = {};

  for (const prop of firstArr) {
    result[prop[0].trim()] = prop[1].trim();
  }

  return result;
}

module.exports = convertToObject;
