'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((style, declaration) => {
    const [property, value] = declaration.trim().split(':');

    if (value) {
      style[property.trim()] = value.trim();
    }

    return style;
  }, {});
}

module.exports = convertToObject;
