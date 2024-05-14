'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const styleObject = {};

  for (const declaration of declarations) {
    const parts = declaration.split(':');

    const key = parts[0].trim();
    const value = parts[1] ? parts[1].trim() : '';

    if (key && value) {
      styleObject[key] = value;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
