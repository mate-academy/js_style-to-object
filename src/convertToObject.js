'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(declaration => declaration.trim())
    .filter(declaration => declaration !== '')
    .reduce((styleObject, declaration) => {
      const colonIndex = declaration.indexOf(':');
      if (colonIndex === -1) {
        return styleObject; // Skip invalid declarations
      }
      const property = declaration.slice(0, colonIndex).trim();
      styleObject[property] = declaration.slice(colonIndex + 1).trim();
      return styleObject;
    }, {});
}

module.exports = convertToObject;
