'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const newString = stylesString.replace(/\/\*[\s\S]*?\*\//g, '');

  const declarations = newString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.length > 0);

  const result = {};

  for (const declaration of declarations) {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
