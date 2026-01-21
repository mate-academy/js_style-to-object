'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .reduce((acc, declaration) => {
      const colonIndex = declaration.indexOf(':');

      const key = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      acc[key] = value;

      return acc;
    }, {});

  return cssProperties;
}

module.exports = convertToObject;
