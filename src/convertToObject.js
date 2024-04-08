'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString.split(';');
  const stylesObject = {};

  stylesArray.forEach((style) => {
    if (style.trim() !== '') {
      const [key, value] = style.split(':').map((item) => item.trim());

      stylesObject[key] = value.includes(' ') ? `${value}` : value;
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
