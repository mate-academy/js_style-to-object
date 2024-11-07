'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .trim()
    .split(';')
    .reduce((stylesObj, declaration) => {
      const [property, value] = declaration
        .split(':')
        .map((part) => part.trim());

      if (property && value) {
        stylesObj[property] = value;
      }

      return stylesObj;
    }, {});
}

module.exports = convertToObject;
