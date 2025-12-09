'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line && line.includes(':'))
    .map((line) => {
      const [key, value] = line.split(':');

      return [key.trim(), value.trim()];
    })
    .reduce((acc, [key, value]) => {
      acc[key] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
