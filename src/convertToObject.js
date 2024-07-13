'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const stylesArray = sourceString.split(';');

  stylesArray.forEach((style) => {
    const [key, value] = style.split(':').map((item) => item.trim());

    if (key && value) {
      stylesObject[key] = value;
    }
  });

  return stylesObject;
}
module.exports = convertToObject;
