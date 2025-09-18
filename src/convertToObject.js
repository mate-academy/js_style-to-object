'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (!sourceString) {
    return {};
  }

  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .reduce((styleMap, declaration) => {
      const parts = declaration.split(':');
      const key = parts[0]?.trim();
      const value = parts[1]?.trim();

      if (key && value) {
        styleMap[key] = value;
      }

      return styleMap;
    }, {});
}

module.exports = convertToObject;
