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
    .reduce((acc, style) => {
      const [property, value] = style.split(':').map((item) => item.trim());

      if (property && value) {
        acc[property] = value;
      }

      return acc;
    }, {});
}

module.exports = convertToObject;
