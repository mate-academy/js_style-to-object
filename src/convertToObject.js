'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration !== '' && declaration.includes(':'))
    .reduce((styleObject, declaration) => {
      const colonIndex = declaration.indexOf(':');
      const key = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      styleObject[key] = value;

      return styleObject;
    }, {});
}

module.exports = convertToObject;
