'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((item) => item.trim() !== '')
    .reduce((styleObject, item) => {
      const trimmedLine = item.trim();
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.slice(0, colonIndex).trim();
      const value = trimmedLine.slice(colonIndex + 1).trim();

      styleObject[key] = value;

      return styleObject;
    }, {});
}

module.exports = convertToObject;
