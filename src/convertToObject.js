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
  // write your code here
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .reduce((obj, prop) => {
      if (prop[0] !== undefined && prop[1] !== undefined) {
        obj[prop[0].trim()] = prop[1].trim();
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
