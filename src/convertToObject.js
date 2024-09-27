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
      (result, pairs) => {
        const key = pairs[0].trim();
        const value = pairs[1].trim();

        result[key] = value;

        return result;
      },
      {}
    );
}

module.exports = convertToObject;
