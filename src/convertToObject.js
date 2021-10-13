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
  const result = {};

  sourceString.split(';').map(el => el.split(':'))
    .filter(el => el.length === 2)
    .map(el => {
      result[el[0].trim()] = el[1].trim();
    });

  return result;
}

module.exports = convertToObject;
