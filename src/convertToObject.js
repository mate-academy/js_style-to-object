'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 *  example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';')
    .filter(rule => rule.includes(':'))
    .map(rule => rule.split(':'))
    .forEach(ruleParts => {
      result[ruleParts[0].trim()] = ruleParts[1].trim();
    });

  return result;
}

module.exports = convertToObject;
