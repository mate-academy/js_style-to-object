'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    if (declaration.trim() !== '') {
      const parts = declaration.split(':');

      const key = parts[0].trim();
      const value = parts[1].trim();

      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
