'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim().includes(':'))
    .reduce((convertedStyles, declaration) => {
      const colonIndex = declaration.indexOf(':');
      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      if (property) {
        convertedStyles[property] = value;
      }

      return convertedStyles;
    }, {});
}

module.exports = convertToObject;
