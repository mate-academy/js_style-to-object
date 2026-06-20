'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = {};

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .forEach((declaration) => {
      const colonIndex = declaration.indexOf(':');
      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      styleDeclarations[property] = value;
    });

  return styleDeclarations;
}

module.exports = convertToObject;
