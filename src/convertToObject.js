'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const result = {};

  const declarations = stylesString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  for (const decl of declarations) {
    const colonIndex = decl.lastIndexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const rawProperty = decl.slice(0, colonIndex);
    const rawValue = decl.slice(colonIndex + 1);

    const property = rawProperty.trim();
    const value = rawValue.trim();

    if (!property || !value) {
      continue;
    }

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
