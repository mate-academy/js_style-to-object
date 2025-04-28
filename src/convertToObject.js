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
    .filter((style) => style.length > 0)
    .reduce((acc, style) => {
      const [key, value] = style.split(':').map((part) => part.trim());

      if (key !== '' && value !== undefined) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
