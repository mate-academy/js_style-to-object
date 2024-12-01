'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(item => item.split(':'))
    .reduce((result, [key, value]) => {
      if (value) {
        result[key.trim()] = value.trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
