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
    .reduce((stylesObject, decl) => {
      if (decl.includes(':')) {
        const [key, value] = decl.split(':');

        stylesObject[key.trim()] = value.trim();
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
