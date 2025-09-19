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
    .reduce((stylesObject, declaration) => {
      const [rawKey, rawValue] = declaration.split(':', 2);

      if (!rawKey || !rawValue) {
        return stylesObject;
      }

      const key = rawKey.trim();
      const value = rawValue.trim();

      if (key.length > 0 && value.length > 0) {
        stylesObject[key] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
