'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string' || sourceString.length === 0) {
    return {};
  }

  const cssProperties = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .reduce((styleObject, declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex === -1) {
        return styleObject;
      }

      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (property === '' || value === '') {
        return styleObject;
      }

      styleObject[property] = value;

      return styleObject;
    }, {});

  return cssProperties;
}

module.exports = convertToObject;
