'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  return stylesString
    .split(';')
    .filter((style) => style.trim())
    .reduce((stylesObject, style) => {
      const [property, value] = style.split(':', 2);

      if (property.trim() && value.trim()) {
        stylesObject[property.trim()] = value.trim();
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
