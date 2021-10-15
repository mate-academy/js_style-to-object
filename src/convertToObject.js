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

 const preparedString = sourceString.split(';').map(element => element.split(':'))
    .filter(array => array.length === 2)
    .map(array => {
      result[array[0].trim()] = array[1].trim();
    });

  return result;
}

module.exports = convertToObject;
