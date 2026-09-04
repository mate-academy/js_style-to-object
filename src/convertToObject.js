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
    .reduce((parsedStyles, decl) => {
      const [key, value] = decl.split(':');

      if (key && value) {
        parsedStyles[key.trim()] = value.trim();
      }

      return parsedStyles;
    }, {});
}

module.exports = convertToObject;
