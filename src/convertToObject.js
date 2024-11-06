'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectOfStyles = {};

  sourceString
    .split(';')
    .map((style) => style.trim())
    .filter((style) => style.length > 3)
    .forEach((style) => {
      const [property, value] = style.split(':').map((part) => part.trim());

      if (property && value) {
        objectOfStyles[property] = value;
      }
    });

  return objectOfStyles;
}

module.exports = convertToObject;
