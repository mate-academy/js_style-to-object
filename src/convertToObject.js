'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString
    .split(';')
    .filter((style) => style.trim())
    .forEach((style) => {
      const [property, value] = style.split(':');

      if (property && value) {
        stylesObject[property.trim()] = value.trim();
      }
    });

  return stylesObject;
}

module.exports = convertToObject;
