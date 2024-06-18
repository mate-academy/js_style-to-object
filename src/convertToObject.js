'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const styleDeclarations = sourceString.split(';');

  styleDeclarations.forEach((style) => {
    const parts = style.split(':');

    if (parts.length === 2) {
      const property = parts[0].trim();
      const value = parts[1].trim();

      styleObject[property] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
