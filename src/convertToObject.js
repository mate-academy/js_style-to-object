'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
/**
 * Converts a CSS style string to a JavaScript object
 * @param {string} styleString - The CSS style string to convert
 * @returns {Object} - The resulting style object
 */
function convertToObject(styleString) {
  const result = {};

  const declarations = styleString.split(';');

  for (const declaration of declarations) {
    if (!declaration.trim()) {
      continue;
    }

    const [property, value] = declaration.split(':');

    if (!property || !value) {
      continue;
    }

    const cleanProperty = property.trim();
    const cleanValue = value.trim();

    result[cleanProperty] = cleanValue;
  }

  return result;
}

module.exports = convertToObject;
