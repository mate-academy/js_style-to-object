'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '')
    .map((el) => el.split(':'))
    .reduce((obj, [key, value]) => {
      obj[key.trim()] = value.trim();

      return obj;
    }, {});
}

module.exports = convertToObject;
