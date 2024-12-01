'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .reduce((result, property) => {
      if (property[1] !== undefined) {
        result[property[0].trim()] = property[1].trim();
      }

      return result;
    }, {});
}

module.exports = convertToObject;
