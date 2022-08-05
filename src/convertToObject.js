'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const arr = sourceString
    .split(';').map(elem => elem.trim())
    .filter(elem => elem.length > 0)
    .map(elem => elem.split(':'))
    .map(elem => elem.map(word => word.trim()));

  arr.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
