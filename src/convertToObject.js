'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .map(declaration => declaration.trim())
    .filter(declaration => declaration !== '')
    .forEach(declaration => {
      const colonIndex = declaration.indexOf(':');
      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      stylesObject[property] = value;
    });

  return stylesObject;
}

module.exports = convertToObject;
