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
  const arrFromString = sourceString.split(';');
  const result = {};

  arrFromString.map(item => item.trim())
    .filter(item => item !== '')
    .map(item => item.split(':'))
    .forEach(item => {
      const [key, value] = item;

      result[key.trim()] = value.trim();
    });

  return result;
}

module.exports = convertToObject;
