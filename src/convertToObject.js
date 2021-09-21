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
  const resultObject = {};

  sourceString
    .split(';')
    .map(item => item.split(':'))
    .filter(item => item.length > 1)
    .forEach(item => {
      resultObject[item[0].trim()] = item[1].trim();
    });

  return resultObject;
}

module.exports = convertToObject;
