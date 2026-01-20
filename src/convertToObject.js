'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration.includes(':'))
    .map((declaration) => {
      const colonIndex = declaration.indexOf(':');

      return [
        declaration.slice(0, colonIndex).trim(),
        declaration.slice(colonIndex + 1).trim(),
      ];
    })
    .filter(([property, value]) => property && value)
    .reduce((acc, [property, value]) => {
      acc[property] = value;

      return acc;
    }, {});

  return styleObject;
}

module.exports = convertToObject;
