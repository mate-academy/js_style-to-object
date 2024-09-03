'use strict';

/**
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
