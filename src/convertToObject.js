'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const stylesArray = sourceString.split(';').filter(Boolean);

  stylesArray.forEach((style) => {
    const parts = style.split(':');

    if (parts.length < 2) {
      return;
    }

    const property = parts[0].trim();
    const value = parts[1].trim();

    if (property && value) {
      stylesObject[property] = value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
