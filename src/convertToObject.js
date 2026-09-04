/* eslint-disable prettier/prettier */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  const stylesObject = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration !== '')
    .reduce((parsedStyles, declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex === -1) {
        return parsedStyles;
      }

      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (property === '') {
        return parsedStyles;
      }

      return {
        ...parsedStyles,
        [property]: value,
      };
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
