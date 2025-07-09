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
    if (declaration.trim()) {
      const [property, value] = declaration.split(':');

      if (property !== undefined && value !== undefined) {
        result[property.trim()] = value.trim();
      }
    }
  }

  return result;
}

module.exports = convertToObject;
