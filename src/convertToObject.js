'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const cleanedSource = sourceString.trim().replace(/;\s*$/, '');

  const declarations = cleanedSource
    .split(';')
    .filter((declaration) => declaration.trim() !== '');

  declarations.forEach((declaration) => {
    const colonIndex = declaration.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
