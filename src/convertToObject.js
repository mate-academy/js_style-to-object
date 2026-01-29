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
    .filter((line) => line.includes(':'))
    .reduce((styleObject, line) => {
      const index = line.indexOf(':');

      const property = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();

      styleObject[property] = value;

      return styleObject;
    }, {});
}

module.exports = convertToObject;
