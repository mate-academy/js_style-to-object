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
    .split(';')
    .map((item) => item.split(':'))
    .filter((elem) => elem.length === 2)
    .reduce((acc, item) => {
      const key = item[0].trim();
      const value = item[1].trim();

      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
