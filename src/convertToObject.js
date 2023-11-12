'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesRows = sourceString.split(';');
  const stylesObj = {};

  stylesRows.forEach((style) => {
    const [property, value] = style.split(':');

    if (property && value) {
      stylesObj[property.trim()] = value.trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
