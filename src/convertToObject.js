'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.trim().split(';');

  const stylesObject = {};

  stylesArray.forEach((style) => {
    if (style.trim() === '') {
      return;
    }

    const [property, value] = style.split(':');

    stylesObject[property.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
