'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  // write your code here
  const result = {};

  // Split the input string by semicolons
  const declarations = styles.split(';');

  for (let decl of declarations) {
    // Trim whitespace around the declaration
    decl = decl.trim();

    // Skip empty declarations
    if (!decl) {
      continue;
    }

    // Split by the first colon into property and value
    const colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = decl.slice(0, colonIndex).trim();
    const value = decl.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
