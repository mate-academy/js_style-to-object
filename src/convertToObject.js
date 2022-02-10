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
  const stringObject = {};

  sourceString
    .split(';')
    .map(pair => pair.trim())
    .filter(pair => pair.length > 1)
    .map(pair => pair.split(':'))
    .forEach(pair => (stringObject[pair[0].trim()] = pair[1].trim()));

  return stringObject;
};

module.exports = convertToObject;
