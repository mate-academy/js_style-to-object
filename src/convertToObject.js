'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const declarations = sourceString.split(';');

  declarations.forEach((declaration) => {
    if (declaration.trim() === '') {
      return {};
    }

    const [rawKey, rawValue] = declaration.split(':');

    const key = rawKey.trim();
    const value = rawValue.trim();

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
