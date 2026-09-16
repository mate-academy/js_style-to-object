'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim() !== '')
    .reduce((result, declaration) => {
      const [key, value] = declaration.split(':');

      result[key.trim()] = value.trim();

      return result;
    }, {});
}

module.exports = convertToObject;
