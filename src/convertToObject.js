'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((arr) => arr.split(':'))
    .filter((item) => item.length > 1)
    .reduce((i, item) => {
      i[item[0].trim()] = item[1].trim();

      return i;
    }, {});
}

module.exports = convertToObject;
