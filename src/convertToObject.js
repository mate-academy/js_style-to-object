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

  return cleanDeclarations.reduce((stylesObject, declaration) => {
    const parts = declaration.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    return { ...stylesObject, [key]: value };
  }, {});
}

module.exports = convertToObject;
