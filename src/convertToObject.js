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

  const declarations = sourceString.split(';');

  const styleObject = declarations
    .filter((decl) => decl && decl.trim() !== '')
    .reduce((stylesAccumulator, decl) => {
      const colonIndex = decl.indexOf(':');

      if (colonIndex === -1) {
        return stylesAccumulator;
      }

      const property = decl.slice(0, colonIndex).replace(/\s+/g, ' ').trim();
      const value = decl.slice(colonIndex + 1).replace(/^\s+|\s+$/g, '');

      if (property) {
        stylesAccumulator[property] = value;
      }

      return stylesAccumulator;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
