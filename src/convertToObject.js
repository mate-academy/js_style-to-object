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
    .filter((line) => line.length > 0)
    .reduce((result, currentLine) => {
      const colonIndex = currentLine.indexOf(':');
      const key = currentLine.slice(0, colonIndex).trim();
      const value = currentLine.slice(colonIndex + 1).trim();

      result[key] = value;

      return result;
    }, {});
}

module.exports = convertToObject;
