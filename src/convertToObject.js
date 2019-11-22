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

  const filteredArr = sourceString.split(';')
    .filter(item => item.includes(':'))
    .map(item => item.split(':')
      .map(str => str.trim()));

  filteredArr.forEach(function(item) {
    result[`${item[0]}`] = `${item[1]}`;
  });

  return result;
}

module.exports = convertToObject;
