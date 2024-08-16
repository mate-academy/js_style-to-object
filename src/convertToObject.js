'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesArray = stylesString.split(';');
  const stylesObject = {};

  stylesArray.forEach((style) => {
    const parts = style.split(':');

    if (parts[0] && parts[1]) {
      stylesObject[parts[0].trim()] = parts[1].trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
