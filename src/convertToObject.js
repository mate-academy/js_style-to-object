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
    const trimmed = declaration.trim();

    if (trimmed === '') {
      return;
    }

    const colonIndex = trimmed.indexOf(':');
    const property = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();

    stylesObject[property] = value;
  });

  return stylesObject;
}

module.exports = convertToObject;
