'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  return styles
    .split(';')
    .map((style) => style.trim())
    .filter(Boolean)
    .reduce((acc, style) => {
      const [key, value] = style.split(':').map((part) => part.trim());

      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
