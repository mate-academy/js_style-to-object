'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString
    .split(';')
    .filter((declaration) => declaration.trim());

  return declarations.reduce((stylesObject, declaration) => {
    const parts = declaration.split(':');
    const property = parts[0].trim();
    const value = parts[1].trim();

    return {
      ...stylesObject,
      [property]: value,
    };
  }, {});
}

module.exports = convertToObject;
