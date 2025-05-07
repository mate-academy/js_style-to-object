'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .reduce((styleObject, declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex === false) {
        return styleObject;
      }

      const key = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (key && value) {
        styleObject[key] = value;
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
