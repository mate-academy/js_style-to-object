'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');

  const cleanDeclarations = declarations.filter(
    (declaration) => declaration.trim() !== '',
  );

  const object = {};

  for (const declaration of cleanDeclarations) {
    const parts = declaration.split(':');

    const key = parts[0].trim();
    const value = parts[1].trim();

    object[key] = value;
  }

  return object;
}

module.exports = convertToObject;
