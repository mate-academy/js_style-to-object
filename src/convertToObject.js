'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const resultObj = {};
  const clearProperties = sourceString
    .replaceAll('\n', '')
    .split(';')
    .map(
      rule => rule.split(':'))
    .filter(
      rule => rule.length === 2);

  clearProperties.map(rule => {
    resultObj[rule[0].trim()] = rule[1].trim();
  });

  return resultObj;
}

module.exports = convertToObject;
