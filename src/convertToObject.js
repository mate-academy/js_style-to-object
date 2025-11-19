'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  declarations.forEach((part) => {
    const trimmed = part.trim();

    if (!trimmed) {
      return;
    }

    const colonIndex = trimmed.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    if (!property || !value) {
      return;
    }

    result[property] = value;
  });

  return result;
}

module.exports = convertToObject;
