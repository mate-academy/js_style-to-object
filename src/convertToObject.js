'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Split by semicolons to get individual declarations
  const declarations = sourceString.split(';');

  for (const declaration of declarations) {
    // Remove whitespace and skip empty declarations
    const trimmed = declaration.trim();

    if (!trimmed) {
      continue;
    }

    // Split into property and value
    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = trimmed.substring(0, colonIndex).trim();
    const value = trimmed.substring(colonIndex + 1).trim();

    // Only add if both property and value exist
    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
