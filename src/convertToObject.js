'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';')
    .map(rule => rule.trim())
    .filter(Boolean)
    .map(rule => rule.split(':'))
    .reduce(
      (result, [key, value]) => ({
        ...result,
        [key.trim()]: value.trim(),
      }),
      {}
    );
}

module.exports = convertToObject;
