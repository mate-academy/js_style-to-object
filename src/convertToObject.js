'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((property) => property.trim())
    .filter((property) => property)
    .reduce((styles, property) => {
      const parts = property.split(':');

      if (parts.length === 2) {
        const key = parts[0].trim();
        const value = parts[1].trim();

        styles[key] = value;
      }

      return styles;
    }, {});
}

module.exports = convertToObject;
