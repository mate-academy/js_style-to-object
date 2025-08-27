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
    .filter((line) => line)
    .reduce((newString, line) => {
      const colonIndex = line.indexOf(':');

      if (colonIndex === -1) {
        return newString;
      }

      const PROPERTY = line.slice(0, colonIndex).trim();
      const VALUE = line.slice(colonIndex + 1).trim();

      if (PROPERTY && VALUE) {
        newString[PROPERTY] = VALUE;
      }

      return newString;
    }, {});
}

module.exports = convertToObject;
