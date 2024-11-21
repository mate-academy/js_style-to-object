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
    .map((str) => str.trim())
    .filter((str) => str)
    .map((str) => str.split(':').map((part) => part.trim()))
    .reduce((result, [key, value]) => {
      if (key && value !== undefined) {
        result[key] = value;
      }

      return result;
    }, {});
}

module.exports = convertToObject;
