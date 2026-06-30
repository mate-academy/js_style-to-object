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
    if (declaration.trim() === '') {
      continue;
    }

    const [rawKey, rawValue] = declaration.split(':');

    const key = rawKey.trim();
    const value = rawValue.trim();

    result[key] = value;
  }

  return result;
}

module.exports = convertToObject;
