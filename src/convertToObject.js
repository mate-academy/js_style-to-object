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
  return sourceString
    .replace(/\r?\n|\r/g, '')
    .split(';')
    .map(line => line.trim().split(':'))
    .filter(x => x[0].length)
    .reduce((prev, keyValue) => {
      return {
        ...prev,
        [keyValue[0].trim()]: keyValue[1].trim(),
      };
    }, {});
}

module.exports = convertToObject;
