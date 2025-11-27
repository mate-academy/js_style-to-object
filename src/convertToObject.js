'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean) // remove empty strings
    .reduce((stylesObject, declaration) => {
      const [property, value] = declaration.split(':');

      if (property && value !== undefined) {
        stylesObject[property.trim()] = value.trim();
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
