'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .reduce(function (stylesObject, declaration) {
      const trimmed = declaration.trim();
      const coloneIndex = trimmed.indexOf(':');

      const key = trimmed.slice(0, coloneIndex).trim();
      const value = trimmed.slice(coloneIndex + 1).trim();

      stylesObject[key] = value;

      return stylesObject;
    }, {});
}
module.exports = convertToObject;
