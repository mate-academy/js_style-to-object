'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length)
    .reduce((acc, declaration) => {
      const [property, value] = declaration.split(':');

      if (!property || !value) {
        return acc;
      }

      const key = property.trim();
      const val = value.trim();

      acc[key] = val;

      return acc;
    }, {});
}

module.exports = convertToObject;
