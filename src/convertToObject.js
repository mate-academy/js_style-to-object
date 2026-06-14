'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const result = {};

  if (!stylesString) {
    return result;
  }

  const declarations = stylesString.split(';');

  for (const declaration of declarations) {
    const trimmed = declaration.trim();

    if (trimmed === '') {
      continue;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
