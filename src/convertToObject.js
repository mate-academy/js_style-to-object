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
    .reduce((styleObject, declaration) => {
      const [key, value] = declaration.split(':');

      if (key && value) {
        styleObject[key.trim()] = value.trim();
      }

      return styleObject;
    }, {});
}

module.exports = convertToObject;
