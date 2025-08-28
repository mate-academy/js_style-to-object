'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string' || !sourceString.trim()) {
    return {};
  }

  const stylesRecord = {};

  sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter((decl) => decl.length)
    .forEach((decl) => {
      const colonIndex = decl.indexOf(':');

      if (colonIndex === -1) {
        return;
      }

      const property = decl.slice(0, colonIndex).trim();
      const value = decl.slice(colonIndex + 1).trim();

      if (property.length === 0) {
        return;
      }

      stylesRecord[property] = value;
    });

  return stylesRecord;
}

module.exports = convertToObject;
