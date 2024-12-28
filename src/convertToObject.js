'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const source = sourceString;
  const result = {};

  source
    .split(';')
    .map((elem) => elem.split(':'))
    .map((elem) => elem.map((el) => el.trim()))
    .filter((elem) => elem.length > 1)
    .map(([key, value]) => (result[key] = value));

  return result;
}

module.exports = convertToObject;
