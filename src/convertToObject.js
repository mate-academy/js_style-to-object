'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((pair) => pair.trim() !== '')
    .reduce((styleObject, pair) => {
      const colonIndex = pair.indexOf(':');

      if (colonIndex !== -1) {
        const key = pair.slice(0, colonIndex).trim();
        const value = pair.slice(colonIndex + 1).trim();

        styleObject[key] = value;
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
