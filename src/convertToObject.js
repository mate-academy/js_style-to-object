'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesObject = {};

  stylesString
    .trim()
    .split(';')
    .forEach((style) => {
      const [property, value] = style.split(':').map((part) => part.trim());

      if (property && value) {
        stylesObject[property] = value;
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
