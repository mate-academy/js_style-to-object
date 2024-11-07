'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesArray = sourceString.trim().split(';');
  const stylesObject = {};

  stylesArray.forEach((style) => {
    const currentStyle = style.trim();

    if (currentStyle) {
      const [property, value] = currentStyle.split(':').map((s) => s.trim());

      if (property && value) {
        stylesObject[property] = value;
      }
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
