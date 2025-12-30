'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = {};

  sourceString
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .forEach((declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex === -1) {
        return cssProperties;
      }

      const key = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (key.length > 0) {
        cssProperties[key] = value;
      }
    });

  return cssProperties;
}

module.exports = convertToObject;
