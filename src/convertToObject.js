'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    const trimDeclaration = declaration.trim();

    if (trimDeclaration) {
      const [key, value] = trimDeclaration.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    }
  });

  return result;
}

module.exports = convertToObject;
