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
    .reduce((result, declaration) => {
      const semicolonsIndex = declaration.indexOf(':');
      const rule = declaration.slice(0, semicolonsIndex).trim();
      const value = declaration.slice(semicolonsIndex + 1).trim();

      if (rule && value) {
        result[rule] = value;
      }

      return result;
    }, {});
}
module.exports = convertToObject;
