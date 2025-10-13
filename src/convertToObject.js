'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString || sourceString.trim() === '') {
    return result;
  }

  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimmed = declaration.trim();

    if (!trimmed) {
      return;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmed.substring(0, colonIndex).trim();
    const value = trimmed.substring(colonIndex + 1).trim();

    if (!property || !value) {
      return;
    }

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
