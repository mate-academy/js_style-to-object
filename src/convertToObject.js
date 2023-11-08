'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const STRING_ARRAY = sourceString.split(';');
  const STYLES_OBJECT = {};

  STRING_ARRAY.forEach((style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      STYLES_OBJECT[property.trim()] = value.trim();
    }
  });

  return STYLES_OBJECT;
}

module.exports = convertToObject;
