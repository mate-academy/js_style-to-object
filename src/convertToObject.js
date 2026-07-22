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
    const trimmed = declaration.trim();

    if (!trimmed) {
      continue;
    }

    const parts = trimmed.split(':');

    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
