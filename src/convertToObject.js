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
    .filter((elem) => elem.includes(':'))
    .map((elem) => elem.split(':'))
    .map(([key, value]) => ({
      [key.trim()]: value.trim(),
    }))
    .reduce((acc, currentObject) => ({ ...acc, ...currentObject }), {});
}

module.exports = convertToObject;
