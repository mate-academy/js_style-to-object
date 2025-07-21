'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const declarations = sourceString.split(';');

  for (let declaration of declarations) {
    declaration = declaration.trim();

    if (!declaration) {
      continue;
    }

    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const key = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
