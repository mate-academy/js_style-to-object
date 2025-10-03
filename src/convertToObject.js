'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((splitString) => splitString.trim())
    .filter((keys) => keys !== undefined)
    .filter((keys) => keys.length > 0)
    .reduce((acc, declaration) => {
      const [key, value] = declaration.split(':');

      if (typeof value === 'undefined') {
        return acc;
      }

      return { ...acc, [key.trim()]: value.trim() };
    }, {});
}

module.exports = convertToObject;
