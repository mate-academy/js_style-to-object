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
    .reduce((prev, declaration) => {
      const separatorIndex = declaration.indexOf(':');

      if (separatorIndex === -1) {
        return prev;
      }

      const rawKey = declaration.slice(0, separatorIndex);
      const rawValue = declaration.slice(separatorIndex + 1);
      const key = rawKey && rawKey.trim();
      const value = rawValue && rawValue.trim();

      if (key && value) {
        prev[key] = value;

        return prev;
      }
    }, {});
}

module.exports = convertToObject;
