'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceObject = {};
  const declarations = sourceString.split(';');

  for (let declaration of declarations) {
    declaration = declaration.trim();

    if (declaration === '') {
      continue;
    }

    const parts = declaration.split(':');

    if (parts.length === 2) {
      const property = parts[0].trim();
      const value = parts[1].trim();

      sourceObject[property] = value;
    }
  }

  return sourceObject;
}

module.exports = convertToObject;
