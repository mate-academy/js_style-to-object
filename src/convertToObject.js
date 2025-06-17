'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // Split the string into lines and then into declarations by semicolons
  const declarations = sourceString.split(';');

  for (const decl of declarations) {
    // Ignore empty or whitespace-only lines
    if (!decl.trim()) {
      continue;
    }

    const [property, ...valueParts] = decl.split(':');

    if (!property || valueParts.length === 0) {
      continue;
    }

    const key = property.trim();
    // Handles values that contain ':'
    const value = valueParts.join(':').trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
