'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((elem) => elem.trim())
    .filter((elem) => elem !== '')
    .map((elem) => elem.split(':'))
    .map(([key, value]) => ({
      [key.trim()]: value.trim(),
    }))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

module.exports = convertToObject;
