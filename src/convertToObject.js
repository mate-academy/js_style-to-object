'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    const parts = declaration.split(':');

    if (parts.length === 2) {
      const property = parts[0].trim();

      stylesObject[property] = parts[1].trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
