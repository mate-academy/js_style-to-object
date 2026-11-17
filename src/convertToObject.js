'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleEntries = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .map((declaration) => {
      const separatorIndex = declaration.indexOf(':');

      return [
        declaration.slice(0, separatorIndex).trim(),
        declaration.slice(separatorIndex + 1).trim(),
      ];
    });

  return Object.fromEntries(styleEntries);
}

module.exports = convertToObject;

module.exports = convertToObject;
