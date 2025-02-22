'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const stylesObject = {};
  const stylesDeclarations = sourceString.split(';');

  stylesDeclarations.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((string) => string.trim());

    stylesObject[key] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
