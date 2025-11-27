'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const result = {};

  // Split by semicolon, each part is "key: value"
  const declarations = stylesString.split(';');

  for (let declaration of declarations) {
    // Trim spaces
    declaration = declaration.trim();

    if (!declaration) {
      continue;
    } // skip empty

    const [property, value] = declaration.split(':');

    if (property && value !== undefined) {
      const key = property.trim();
      const val = value.trim();

      result[key] = val;
    }
  }

  return result;
}

module.exports = convertToObject;
