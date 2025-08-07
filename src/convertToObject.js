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
    .filter((declaration) => declaration.length > 0)
    .map((declaration) => {
      const colonIndex = declaration.indexOf(':');
      const property = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      return [property, value];
    })
    .reduce((acc, [property, value]) => {
      acc[property] = value;

      return acc;
    }, {});
}

module.exports = convertToObject;
