// src/convertToObject.js
'use strict';

function convertToObject(stylesString) {
  const result = {};

  // Handle non-string or empty input
  if (typeof stylesString !== 'string' || stylesString.trim() === '') {
    return result;
  }

  // Split by ';' to get individual declarations
  const declarations = stylesString.split(';');

  for (const declaration of declarations) {
    // Remove whitespace, tabs, and line breaks around each declaration
    const trimmed = declaration.trim();

    // Skip empty chunks (e.g., from ";;" or trailing ';')
    if (!trimmed) {
      continue;
    }

    // Find the first ':' as separator between property and value
    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      continue;
    } // Not a valid "prop: value" pair

    const property = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    // Skip if either side is empty after trimming
    if (!property || !value) {
      continue;
    }

    // Keep internal spaces and line breaks in the value as-is
    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
