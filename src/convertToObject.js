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

  sourceString
    .split(';')
    .map(el => el.trim().split(':'))
    .map(el => {
      if (el[0] !== '' && el[1] !== '') {
        result[el[0].trim()] = el[1].trim();
      }
    });

  return result;
}

module.exports = convertToObject;
