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
  // const obj = {};

  return sourceString.split(';')
    .map(item => item.split(':'))
    .reduce((obj, [key, value]) => {
      (value !== undefined) && (obj[key.trim()] = value.trim());

      return obj;
    }, {});
}

module.exports = convertToObject;
