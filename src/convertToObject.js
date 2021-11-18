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

  sourceString.split(';')
    .map(item => item.trim().split(':'))
    .filter(item => {
      if (item[0].length > 0) {
        const key = item[0].trim();
        const values = item[1].trim();

        result[key] = values;

        return item[0].length > 0;
      }
    });

  return result;
}

module.exports = convertToObject;
