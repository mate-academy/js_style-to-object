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
    .filter((declaration) => declaration !== '')
    .reduce((result, declaration) => {
      const colonIndex = declaration.indexOf(':');
      const key = declaration.slice(0, colonIndex).trim();
      const value = declaration.slice(colonIndex + 1).trim();

      result[key] = value;

      return result;
    }, {});
}

module.exports = convertToObject;
