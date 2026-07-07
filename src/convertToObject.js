'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  if (!sourceString) {
    return result;
  }

  sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter(Boolean)
    .forEach((declaration) => {
      const separatorIndex = declaration.indexOf(':');

      if (separatorIndex === -1) {
        return;
      }

      const rawKey = declaration.slice(0, separatorIndex);
      const rawValue = declaration.slice(separatorIndex + 1);
      const key = rawKey && rawKey.trim();
      const value = rawValue && rawValue.trim();

      if (key && value) {
        result[key] = value;
      }
    });

  return result;
}

module.exports = convertToObject;
