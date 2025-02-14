'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(/;\s*/)
    .map((line) => line.trim())
    .filter((line) => line && line.includes(':'))
    .reduce((acc, line) => {
      const [key, value] = line.split(/:\s*/);

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToObject;
