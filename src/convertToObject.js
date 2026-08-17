'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const stylesObject = {};

  const declarations = styles
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part.includes(':'));

  declarations.forEach((declaration) => {
    const colonIndex = declaration.indexOf(':');

    const property = declaration.slice(0, colonIndex).trim();
    const value = declaration.slice(colonIndex + 1).trim();

    if (property && value) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
