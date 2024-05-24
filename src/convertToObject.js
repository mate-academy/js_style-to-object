'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(stylesString) {
  const stylesObject = {};

  stylesString.split(';').forEach((style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      stylesObject[property.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
