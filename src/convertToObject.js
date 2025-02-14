'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  const declarations = sourceString
    .split(';')
    .map((declaration) => declaration.trim());

  for (const declaration of declarations) {
    if (declaration) {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      styleObject[property] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
