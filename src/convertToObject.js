'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((declaration) => declaration.trim().length > 0)
    .reduce((obj, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      if (property && value) {
        obj[property] = value;
      }

      return obj;
    }, {});
}

module.exports = convertToObject;
