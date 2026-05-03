'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((line) => {
      return line.trim().length > 0 && line.includes(':');
    })
    .reduce((result, line) => {
      const colonIndex = line.indexOf(':');

      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();

      result[key] = value;

      return result;
    }, {});
}

module.exports = convertToObject;
