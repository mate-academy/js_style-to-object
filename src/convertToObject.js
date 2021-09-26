'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString
    .split(';')
    .map(line => line.trim().split(':'))
    .filter(line => line.length > 1);

  return arr.reduce((result, [key, value]) => {
    return {
      ...result,
      [key.trim()]: value.trim(),
    };
  }, {});
}

module.exports = convertToObject;
