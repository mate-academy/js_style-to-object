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
  return sourceString.split(';')
    .map(item => item.trim().split(':'))
    .reduce((next, item) => {
      if (item[0].length > 0) {
        const key = item[0].trim();
        const values = item[1].trim();

        next[key] = values;
      }

      return next;
    }, {});
}

module.exports = convertToObject;
