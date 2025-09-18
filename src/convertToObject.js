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
    .filter((line) => line !== '' && line.includes(':'))
    .reduce((stylesObject, line) => {
      const idx = line.indexOf(':');
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();

      if (key && value) {
        stylesObject[key] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
