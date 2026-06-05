'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((cssObject, style) => {
    const declaration = style.trim();

    if (!declaration) {
      return cssObject;
    }

    const [property, value] = declaration.split(':');

    cssObject[property.trim()] = value.trim();

    return cssObject;
  }, {});
}

module.exports = convertToObject;
