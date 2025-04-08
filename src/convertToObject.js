'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString.trim()) {
    return {};
  }

  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((result, line) => {
      const colonIndex = line.indexOf(':');

      if (colonIndex === -1) {
        return result;
      }

      const property = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();

      if (property && value) {
        result[property] = value;
      }

      return result;
    }, {});
}

module.exports = convertToObject;
