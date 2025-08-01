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
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const rawKey = declaration.slice(0, colonIndex).trim();
    const rawValue = declaration.slice(colonIndex + 1).trim();

    if (rawKey.length === 0) {
      continue;
    }

    result[rawKey] = rawValue;
  }

  return result;
}

module.exports = convertToObject;
