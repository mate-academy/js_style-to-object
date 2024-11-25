'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line)
    .reduce((stylesObject, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      if (property && value) {
        stylesObject[property] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
