'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const values = sourceString.split(';')
    .map((value) => value.split(':'))
    .filter((value) => value.length > 1);

  const result = {};

  for (const value of values) {
    result[value[0].trim()] = value[1].trim();
  }

  return result;
}

module.exports = convertToObject;
