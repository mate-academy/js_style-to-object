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
    .filter((style) => style)
    .reduce((acc, style) => {
      const [property, value] = style.split(':').map((part) => part.trim());

      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
