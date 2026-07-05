'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString || typeof sourceString !== 'string') {
    return {};
  }

  const styleEntries = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.length > 0)
    .filter((declaration) => declaration.includes(':'))
    .map((declaration) => {
      const colonIndex = declaration.indexOf(':');
      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      return [property, value];
    });

  return Object.fromEntries(styleEntries);
}

module.exports = convertToObject;
