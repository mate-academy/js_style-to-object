'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const declarations = sourceString.split(';');

  for (const declar of declarations) {
    const trimmed = declar.trim();

    if (!trimmed) {
      continue;
    }

    const colIndex = trimmed.indexOf(':');

    const property = trimmed.slice(0, colIndex).trim();
    const value = trimmed.slice(colIndex + 1).trim();

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
