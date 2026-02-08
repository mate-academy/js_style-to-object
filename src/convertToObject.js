'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parsedStyles = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter(Boolean)
    .reduce((stylesMap, decl) => {
      const colonIndex = decl.indexOf(':');
      if (colonIndex === -1) return stylesMap;

      const property = decl.slice(0, colonIndex).trim();
      const value = decl.slice(colonIndex + 1).trim();

      stylesMap[property] = value;
      return stylesMap;
    }, {});

  return parsedStyles;
}

module.exports = convertToObject;
