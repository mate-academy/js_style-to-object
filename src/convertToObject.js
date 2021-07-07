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
  return sourceString.split(';').map(el => el.split(':'))
    .reduce((obj, curent) => {
      if (curent[1] !== undefined) {
        obj[curent[0].trim()] = curent[1].trim();
      };
      return obj;
    }, {});
}

module.exports = convertToObject;
