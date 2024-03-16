'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((style, element) => {
    const parts = element.split(':').map((part) => part.trim());

    if (parts.length === 2) {
      const [key, value] = parts;

      style[key] = value;
    }

    return style;
  }, {});
}

module.exports = convertToObject;
