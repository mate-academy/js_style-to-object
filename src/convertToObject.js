'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const results = {};

  sourceString
    .split(';')
    .map((string) => string.trim())
    .filter((string) => string.includes(':'))
    .forEach((string) => {
      const [key, value] = string.split(':');

      results[key.trim()] = value.trim();
    });

  return results;
}

module.exports = convertToObject;
