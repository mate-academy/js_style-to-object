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
    .reduce((obj, decl) => {
      const colonIndex = decl.indexOf(':');

      if (colonIndex === -1) {
        return obj;
      }

      const property = decl.slice(0, colonIndex).replace(/\s+/g, ' ').trim();
      const value = decl.slice(colonIndex + 1).replace(/^\s+|\s+$/g, '');

      if (property) {
        obj[property] = value;
      }

      return obj;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
