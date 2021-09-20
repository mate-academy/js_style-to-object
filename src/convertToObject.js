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
  const res = {};

  sourceString
    .split(';')
    .map(str => str.split(':'))
    .filter(str => str.length > 1)
    .forEach(str => {
      res[str[0].trim()] = str[1].trim();
    });

  return res;
}

module.exports = convertToObject;
