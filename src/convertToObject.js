'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((decl) => decl.trim() !== '')
    .reduce((obj, declaration) => {
      const [key, value] = declaration.split(':');

      obj[key.trim()] = value.trim();

      return obj;
    }, {});
}

module.exports = convertToObject;
