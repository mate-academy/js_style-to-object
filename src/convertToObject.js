'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').map(item => item.split(':'))
    .reduce((obj, arr) => {
      if (arr[1] !== undefined) {
        obj[arr[0].trim()] = arr[1].trim();
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
