'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.includes(':'))
    .reduce((styles, declaration) => {
      const separatorIndex = declaration.indexOf(':');

      const property = declaration.slice(0, separatorIndex).trim();

      const value = declaration.slice(separatorIndex + 1).trim();

      styles[property] = value;

      return styles;
    }, {});
}

module.exports = convertToObject;
