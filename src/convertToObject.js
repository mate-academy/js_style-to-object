'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';').map((item) => item.trim()).filter((item) => item !== '');

  const stylesObject = {};

  stylesArray.forEach((style) => {
    const [key, value] = style.split(':');

    if (key && value) {
      stylesObject[key.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
