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
    const colonIndex = style.indexOf(':');

    if (colonIndex > -1) {
      const prop = style.slice(0, colonIndex).trim();
      const value = style.slice(colonIndex + 1).trim();

      styleObject[prop] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
