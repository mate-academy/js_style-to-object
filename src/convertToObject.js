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
    .map(item => item.split(':'))
    .filter(item => item.length >= 2)
    .map(item => item.map(el => el.trim()))
    .forEach(item => {
      result[item[0]] = item[1];
    });

  return result;
}

module.exports = convertToObject;
